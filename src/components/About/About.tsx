"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className={styles.inner}>
        {/* Eyebrow */}
        <p className={`${styles.eyebrow} ${visible ? styles.animateIn : ""}`}>
          ABOUT
        </p>

        {/* Headline */}
        <h2 className={`${styles.headline} ${visible ? styles.animateIn : ""}`} style={{ transitionDelay: "0.1s" }}>
          The Meaning Behind <span className={styles.nameAccent}>REINN</span>
        </h2>

        {/* Story Card */}
        <div className={`${styles.card} ${visible ? styles.cardVisible : ""}`}>
          <div className={styles.cardHeader}>
            {/* Small Logo Icon */}
            <div className={`${styles.logoIcon} ${visible ? styles.animateIn : ""}`} style={{ transitionDelay: "0.3s" }}>
              <img src="/logo.png" alt="REINN Logo" className={styles.aboutLogo} />
            </div>
          </div>

          <div className={styles.cardContent}>
            <p className={`${styles.mainStatement} ${visible ? styles.animateIn : ""}`} style={{ transitionDelay: "0.4s" }}>
              REINN is inspired by the power of rain — the idea that{" "}
              <span className={styles.strongRed}>every great</span>{" "}
              <span className={styles.gradientDrop}>
                transformation begins with a single drop.
              </span>
            </p>

            <div className={styles.details}>
              <p className={`${styles.descParagraph} ${visible ? styles.animateIn : ""}`} style={{ transitionDelay: "0.5s" }}>
                The name carries the belief that meaningful growth starts small — a
                single decision, a bold move, a moment of clarity — and from there,
                ripples of impact spread outward. Reinn was built for
                entrepreneurs and businesses who see beyond short-term gains, who
                understand that real success comes from purpose-driven strategy and
                global thinking.
              </p>
              <p className={`${styles.descParagraph} ${visible ? styles.animateIn : ""}`} style={{ transitionDelay: "0.6s" }}>
                More than a brand, Reinn is a symbol of connection — linking
                ambition with action, vision with execution, and local roots with
                global reach. We exist to be the catalyst for those ready to create
                something that matters and leave a lasting mark on the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
