"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Impact.module.css";

/* ── Metric cards data ── */
const metrics = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    value: 347,
    suffix: "%",
    title: "Lead Generation Growth",
    description:
      "Increase in qualified leads after implementing AI-powered nurture and instant response systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8"  y1="2" x2="8"  y2="6" />
        <line x1="3"  y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
    value: 85,
    suffix: "%",
    title: "Sales Automation",
    description:
      "Reduction in manual follow-up tasks — AI handles nurturing while your team focuses on closing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
    value: 2.4,
    suffix: "x",
    isDecimal: true,
    title: "Revenue Growth",
    description:
      "Revenue growth after installing the complete AI Sales Engine with CRM management.",
  },
];

/* ── Counter hook ── */
function useCountUp(target: number, active: boolean, duration = 1800, isDecimal = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration, isDecimal]);

  return count;
}

/* ── Single metric card ── */
function MetricCard({
  metric,
  active,
  delay,
}: {
  metric: (typeof metrics)[0];
  active: boolean;
  delay: number;
}) {
  const count = useCountUp(metric.value, active, 1800, metric.isDecimal);

  return (
    <div
      className={`${styles.card} ${active ? styles.cardVisible : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.cardGlow} />
      <div className={styles.iconBox}>{metric.icon}</div>
      <div className={styles.metric}>
        {metric.isDecimal ? count.toFixed(1) : count}
        <span className={styles.suffix}>{metric.suffix}</span>
      </div>
      <h3 className={styles.cardTitle}>{metric.title}</h3>
      <p className={styles.cardDesc}>{metric.description}</p>
    </div>
  );
}

/* ── Section ── */
export default function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="results-impact" ref={ref}>
      <div className={styles.bgLeft} />
      <div className={styles.bgRight} />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>IMPACT</p>
        <h2 className={styles.headline}>
          Real Business <span className={styles.accent}>Growth</span>
        </h2>

        <div className={styles.grid}>
          {metrics.map((m, i) => (
            <MetricCard key={i} metric={m} active={active} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
