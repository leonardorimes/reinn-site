"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorTrail.module.css";

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const now = performance.now();
      if (now - lastSpawnRef.current > 16) {
        lastSpawnRef.current = now;
        // Spawn 2–3 dots per move event
        const count = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < count; i++) {
          const size = Math.random() * 5 + 2.5; // 2.5–7.5px
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 0.8;
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 6,
            y: e.clientY + (Math.random() - 0.5) * 6,
            size,
            life: 0,
            maxLife: Math.random() * 35 + 30, // 30–65 frames
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.3, // slight upward drift
          });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);

      for (const p of particlesRef.current) {
        const progress = p.life / p.maxLife;
        const alpha = (1 - progress) * 0.85;
        const scale = 1 - progress * 0.4;
        const r = p.size * scale;

        // Outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.5);
        grd.addColorStop(0, `rgba(232, 75, 42, ${alpha * 0.5})`);
        grd.addColorStop(1, `rgba(232, 75, 42, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 75, 42, ${alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // subtle gravity
        p.life++;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
