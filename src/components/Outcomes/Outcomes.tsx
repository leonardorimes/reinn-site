"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Outcomes.module.css";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    ),
    title: "Instant Lead Response",
    description:
      "AI agents engage every lead in seconds via SMS and calls — so you never lose a hot prospect to slow follow-up.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8"  y1="2" x2="8"  y2="6" />
        <line x1="3"  y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "More Appointments Booked",
    description:
      "Automated qualification and booking converts leads into scheduled meetings — filling your calendar consistently.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Higher Conversion Rates",
    description:
      "Intelligent nurturing and persistent follow-ups mean more leads become paying customers.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Structured CRM Management",
    description:
      "Pipeline creation, sales stages, appointment tracking and follow-up visibility — nothing falls through the cracks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
      </svg>
    ),
    title: "Stronger Sales Team",
    description:
      "Commercial support empowers your team with insights, follow-up strategies and deal management — so they close more.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
    title: "Scalable Growth",
    description:
      "An AI-powered infrastructure that grows with your business — respond to every lead without adding headcount.",
  },
];

export default function Outcomes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="results" ref={sectionRef}>
      <div className={styles.bgTexture} />

      <div className={styles.inner}>
        {/* Eyebrow */}
        <p className={styles.eyebrow}>OUTCOMES</p>

        {/* Headline */}
        <h2 className={styles.headline}>
          What Businesses Gain{" "}
          <span className={styles.gradientText}>with REINN</span>
        </h2>

        {/* Cards grid */}
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
              style={{ transitionDelay: visible ? `${i * 0.08}s` : "0s" }}
            >
              <div className={styles.iconBox}>
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
