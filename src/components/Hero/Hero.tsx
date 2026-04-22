"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Dashboard from "@/components/Dashboard/Dashboard";

const stats = [
  { value: "10x", label: "Faster Lead Response" },
  { value: "3x", label: "More Appointments" },
  { value: "24/7", label: "AI Working" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const el = currentTarget as HTMLElement;
      const { width, height } = el.getBoundingClientRect();
      const xPct = (clientX / width - 0.5) * 2;
      const yPct = (clientY / height - 0.5) * 2;

      hero.style.setProperty("--mx", `${xPct * 15}px`);
      hero.style.setProperty("--my", `${yPct * 10}px`);
    };

    const section = hero.closest("section");
    section?.addEventListener("mousemove", handleMouseMove);
    return () => section?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.section} id="hero">
      {/* Background layers */}
      <div className={styles.bg}>
        {/* Vertical lines grid */}
        <div className={styles.bgLines} />
        {/* Radial glow – bottom center */}
        <div className={styles.bgGlowBottom} />
        {/* Radial glow – top left accent */}
        <div className={styles.bgGlowTopLeft} />
        {/* Noise texture overlay */}
        <div className={styles.bgNoise} />
      </div>

      <div className={styles.container} ref={heroRef}>
        {/* Badge */}
        <div className={styles.badge} id="hero-badge">
          <span className={styles.badgeDot} />
          AI-Powered Growth Solutions
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>Generate Leads.</span>
          <span className={styles.headlineLine}>
            <em className={styles.accent}>Convert</em> Automatically.
          </span>
        </h1>

        {/* Sub-copy */}
        <p className={styles.subCopy}>
          REINN helps small and medium businesses capture every opportunity and
          convert them into scheduled appointments — using AI-driven processes
          and structured CRM management.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaRow}>
          <a
            href="#live-demo"
            className={styles.ctaPrimary}
            id="hero-cta-primary"
          >
            Discover the AI Sales Engine
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className={styles.ctaSecondary}
            id="hero-cta-secondary"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <polygon points="2,1 13,7 2,13" fill="currentColor" />
            </svg>
            Book a Strategy Call
          </a>
        </div>

        {/* Stats */}
        <div className={styles.statsRow}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard panel */}
        <div className={styles.dashboardWrap}>
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
