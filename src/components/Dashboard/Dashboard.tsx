"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Dashboard.module.css";

const stats = [
  { label: "Today's Leads", value: "47", delta: "+12%" },
  { label: "Appointments", value: "18", delta: "+28%" },
  { label: "Conversion", value: "38%", delta: "+5%" },
];

const leads = [
  {
    initials: "SM",
    name: "Sarah Miller",
    time: "2m ago",
    status: "Qualified",
    statusClass: "statusQualified",
    barWidth: 88,
    barColor: "barRed",
  },
  {
    initials: "JC",
    name: "James Chen",
    time: "5m ago",
    status: "Contacted",
    statusClass: "statusContacted",
    barWidth: 66,
    barColor: "barOrange",
    hasIcon: true,
  },
  {
    initials: "AC",
    name: "Ana Costa",
    time: "12m ago",
    status: "Booked",
    statusClass: "statusBooked",
    barWidth: 95,
    barColor: "barGreen",
  },
  {
    initials: "MJ",
    name: "Mike Johnson",
    time: "18m ago",
    status: "Nurturing",
    statusClass: "statusNurturing",
    barWidth: 42,
    barColor: "barCyan",
  },
];

export default function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.wrapper} ${visible ? styles.wrapperVisible : ""}`} ref={ref}>
      {/* Window chrome */}
      <div className={styles.window}>
        {/* Title bar */}
        <div className={styles.titleBar}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <span className={styles.titleText}>REINN — AI Sales Engine</span>
        </div>

        {/* Stats cards */}
        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <p className={styles.statCardLabel}>{s.label}</p>
              <div className={styles.statCardRow}>
                <span className={styles.statCardValue}>{s.value}</span>
                <span className={styles.statCardDelta}>{s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <div className={styles.pipeline}>
          <div className={styles.pipelineHeader}>
            <span className={styles.pipelineTitle}>Live Pipeline</span>
            <div className={styles.livePill}>
              <span className={styles.liveDot} />
              Live
            </div>
          </div>

          <div className={styles.leadsList}>
            {leads.map((lead, i) => (
              <div key={i} className={styles.leadRow}>
                {/* Avatar */}
                <span className={styles.avatar}>{lead.initials}</span>

                {/* Info */}
                <div className={styles.leadInfo}>
                  <div className={styles.leadMeta}>
                    <span className={styles.leadName}>{lead.name}</span>
                    <span className={styles.leadTime}>{lead.time}</span>
                  </div>

                  {/* Progress bar */}
                  <div className={styles.barTrack}>
                    <div
                      className={`${styles.barFill} ${styles[lead.barColor]}`}
                      style={{
                        width: visible ? `${lead.barWidth}%` : "0%",
                        transitionDelay: visible ? `${0.3 + i * 0.18}s` : "0s",
                      }}
                    />
                    {lead.hasIcon && (
                      <span className={styles.barIcon}>▶</span>
                    )}
                  </div>

                  <span className={`${styles.leadStatus} ${styles[lead.statusClass]}`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
