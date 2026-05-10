import styles from "./Footer.module.css";
import Link from "next/link";

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
          <div className={styles.copyrightContainer}>
            <p className={styles.copyright}>
              © {currentYear} REINN. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
              <span className={styles.separator}>|</span>
              <Link href="/terms-and-conditions" className={styles.legalLink}>Terms and conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
