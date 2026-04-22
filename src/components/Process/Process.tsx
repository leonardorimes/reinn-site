"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Lead Generation",
    description:
      "REINN generates leads through targeted marketing channels — ads, SEO, social media and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
        <path d="M8 12h8M12 8l4 4-4 4" />
        <path d="M3 7l4 2M3 17l4-2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Instant AI Response",
    description:
      "AI agents respond to every lead instantly via SMS or phone calls, qualifying prospects in real time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Lead Nurturing",
    description:
      "Prospects receive personalized information and automated follow-ups until they're ready to move forward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Appointment Booking",
    description:
      "Qualified leads are converted into scheduled meetings — automatically booked into your calendar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "CRM Sales Management",
    description:
      "REINN helps manage your pipeline, track opportunities, organize sales stages and support your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

// Each step's % position along the line (0%–100%)
const BEAM_DURATION = 2800; // ms total beam travel
const stepRevealDelays = [0, 0.22, 0.46, 0.7, 0.93]; // fraction of beam travel when each icon should appear

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !active) {
          setActive(true);
          // Stagger reveal each icon as the beam passes over it
          stepRevealDelays.forEach((fraction, i) => {
            setTimeout(
              () => setRevealed((prev) => { const n = [...prev]; n[i] = true; return n; }),
              fraction * BEAM_DURATION + 120 // slight offset so icon appears as beam arrives
            );
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section className={styles.section} id="how-it-works" ref={sectionRef}>
      {/* Background dots */}
      <div className={styles.bgDots} />

      <div className={styles.inner}>
        {/* Label */}
        <p className={styles.eyebrow}>PROCESS</p>

        {/* Headline */}
        <h2 className={styles.headline}>
          From Lead to <span className={styles.accent}>Booked Appointment</span>
        </h2>

        {/* Timeline */}
        <div className={styles.timeline}>
          {/* Connector line */}
          <div className={styles.lineTrack}>
            {/* Static dim line */}
            <div className={styles.lineBase} />
            {/* Animated beam */}
            <div className={`${styles.beam} ${active ? styles.beamActive : ""}`} />
          </div>

          {/* Steps */}
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={styles.step}>
                {/* Icon box */}
                <div className={`${styles.iconWrap} ${revealed[i] ? styles.iconRevealed : ""}`}>
                  {/* Number badge */}
                  <span className={styles.badge}>{step.number}</span>
                  {/* Icon */}
                  <div className={styles.iconInner}>{step.icon}</div>
                  {/* Glow burst on reveal */}
                  <div className={`${styles.glow} ${revealed[i] ? styles.glowActive : ""}`} />
                </div>

                {/* Text below */}
                <div className={`${styles.textWrap} ${revealed[i] ? styles.textRevealed : ""}`}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
