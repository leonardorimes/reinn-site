"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./LiveDemo.module.css";

/* ── Conversation script ── */
const MESSAGES = [
  { from: "user" as const, text: "Hi, I saw your ad about AI-powered sales automation. Can you tell me more?", typingMs: 0 },
  { from: "bot"  as const, text: "Hey! Thanks for reaching out 👋 Absolutely — we help businesses capture, qualify, and convert leads automatically using AI agents. Can I ask what industry you're in?", typingMs: 2200 },
  { from: "user" as const, text: "I run a real estate agency. We get tons of leads but most go cold before we can follow up.", typingMs: 0 },
  { from: "bot"  as const, text: "That's exactly what we solve. Our AI responds to every lead within seconds — via SMS or phone — so no opportunity slips through. How many leads does your team handle per month?", typingMs: 2000 },
  { from: "user" as const, text: "Around 200-300 per month. We only manage to follow up on maybe half.", typingMs: 0 },
  { from: "bot"  as const, text: "Got it. With REINN, you'd be responding to 100% of those leads instantly — qualifying them and nurturing the ones that aren't ready yet. Our clients typically see a 3x increase in booked appointments.", typingMs: 2400 },
  { from: "user" as const, text: "That sounds great. How can we get started?", typingMs: 0 },
  { from: "bot"  as const, text: "Perfect! I'd love to set up a quick strategy call so we can map this to your business. I have availability tomorrow at 10am or 2pm — which works best for you?", typingMs: 2000 },
  { from: "user" as const, text: "2pm works.", typingMs: 0 },
  { from: "bot"  as const, text: "Done ✅ You're booked for tomorrow at 2pm. You'll receive a calendar invite and a confirmation SMS shortly. Looking forward to helping you scale! 🚀", typingMs: 1800 },
];

// Stage boundaries (0-indexed message that starts each stage)
const STAGES = [
  { label: "Response",      color: "#e84b2a", start: 0, end: 1 },
  { label: "Qualification", color: "#f59e0b", start: 2, end: 5 },
  { label: "Booking",       color: "#22c55e",  start: 6, end: 9 },
];

const USER_PAUSE  = 1100; // ms between bot and next user message
const BOT_PAUSE   = 700;  // ms between user and bot typing indicator

/* ── Icons ── */
const BotAvatar = () => (
  <div className={styles.botAvatar}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="8" width="18" height="12" rx="3" />
      <path d="M9 8V6a3 3 0 016 0v2" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  </div>
);

const UserAvatar = () => (
  <div className={styles.userAvatar}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  </div>
);

const TypingIndicator = () => (
  <div className={styles.typingBubble}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
  </div>
);

/* ── Component ── */
export default function LiveDemo() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const listRef     = useRef<HTMLDivElement>(null);
  const [shown, setShown]         = useState<typeof MESSAGES>([]);
  const [typing, setTyping]       = useState(false);
  const [started, setStarted]     = useState(false);
  const [done, setDone]           = useState(false);
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => { 
    timerRefs.current.forEach(clearTimeout); 
    timerRefs.current = []; 
  }, []);

  const scrollBottom = () => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  const runConversation = useCallback(() => {
    // Clear any existing timers first
    clearTimers();
    
    // Reset all states
    setShown([]);
    setTyping(false);
    setDone(false);

    // Initial delay before starting the conversation
    const initialT = setTimeout(() => {
      let cursor = 0;

      const step = () => {
        if (cursor >= MESSAGES.length) { 
          setDone(true); 
          return; 
        }
        
        const msg = MESSAGES[cursor];

        if (msg.from === "user") {
          const t = setTimeout(() => {
            setShown(prev => [...prev, msg]);
            cursor++;
            const t2 = setTimeout(step, BOT_PAUSE);
            timerRefs.current.push(t2);
          }, USER_PAUSE);
          timerRefs.current.push(t);
        } else {
          // Show typing indicator, then reveal message
          setTyping(true);
          const t = setTimeout(() => {
            setTyping(false);
            setShown(prev => [...prev, msg]);
            cursor++;
            const t2 = setTimeout(step, USER_PAUSE);
            timerRefs.current.push(t2);
          }, msg.typingMs);
          timerRefs.current.push(t);
        }
      };

      step();
    }, 400); // 400ms delay for a natural start

    timerRefs.current.push(initialT);
  }, [clearTimers]);

  // Start when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Use a local variable to ensure we only trigger once per component mount cycle
    let hasTriggered = false;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTriggered) {
        hasTriggered = true;
        setStarted(true);
        runConversation();
        // Optional: stop observing once triggered
        obs.unobserve(section);
      }
    }, { 
      threshold: 0.05, // Very low threshold so it triggers soon
      rootMargin: "0px 0px -100px 0px" // Trigger slightly before it's fully in view
    });

    obs.observe(section);
    return () => {
      obs.disconnect();
      clearTimers();
    };
  }, [runConversation]);

  // Auto-scroll to bottom whenever messages update
  useEffect(() => { scrollBottom(); }, [shown, typing]);

  // Active stage
  const lastIdx = shown.length - 1;
  const activeStage = STAGES.findIndex(s => lastIdx >= s.start && lastIdx <= s.end);

  return (
    <section className={styles.section} id="live-demo" ref={sectionRef}>
      <div className={styles.bgGlow} />

      <div className={styles.inner}>
        {/* Header text */}
        <p className={styles.eyebrow}>LIVE DEMO</p>
        <h2 className={styles.headline}>
          See REINN <span className={styles.accent}>In Action</span>
        </h2>
        <p className={styles.sub}>
          Watch how our AI agent responds to a new lead, qualifies them, and books an
          appointment — all in seconds.
        </p>

        {/* Chat card */}
        <div className={styles.card}>
          {/* Chat header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
              <div className={styles.statusDot} />
              <BotAvatar />
              <div className={styles.agentInfo}>
                <span className={styles.agentName}>REINN AI Agent</span>
                <span className={styles.agentStatus}>Online · Responds instantly</span>
              </div>
            </div>
            <button
              className={styles.replayBtn}
              onClick={runConversation}
              aria-label="Replay conversation"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              Replay
            </button>
          </div>

          {/* Messages area */}
          <div className={styles.messages} ref={listRef}>
            {shown.map((msg, i) => (
              <div
                key={i}
                className={`${styles.msgRow} ${msg.from === "user" ? styles.msgRowUser : styles.msgRowBot}`}
              >
                {msg.from === "bot" && <BotAvatar />}
                <div className={`${styles.bubble} ${msg.from === "user" ? styles.bubbleUser : styles.bubbleBot}`}>
                  {msg.text}
                </div>
                {msg.from === "user" && <UserAvatar />}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className={`${styles.msgRow} ${styles.msgRowBot}`}>
                <BotAvatar />
                <TypingIndicator />
              </div>
            )}
          </div>

          {/* Footer: stage pills */}
          <div className={styles.chatFooter}>
            <div className={styles.stages}>
              {STAGES.map((s, i) => (
                <span
                  key={s.label}
                  className={`${styles.stagePill} ${i === activeStage ? styles.stagePillActive : ""}`}
                  style={{ "--stage-color": s.color } as React.CSSProperties}
                >
                  <span className={styles.stageDot} />
                  {s.label}
                </span>
              ))}
            </div>
            <span className={styles.simLabel}>
              {done ? "Conversation complete ✓" : "Simulated conversation"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
