import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left Spacer (for centering logo) */}
        <div className={styles.side} />

        {/* Center Logo */}
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="REINN Logo" className={styles.footerLogo} />
        </div>

        {/* Right Copyright */}
        <div className={styles.side}>
          <p className={styles.copyright}>
            © {currentYear} REINN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
