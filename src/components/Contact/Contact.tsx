"use client";

import Script from "next/script";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        {/* Left Content */}
        <div className={styles.content}>
          <h2 className={styles.headline}>
            Ready to Turn Leads into <br />
            <span className={styles.accent}>Booked Appointments?</span>
          </h2>
          <p className={styles.description}>
            Let REINN install an AI-powered growth engine in your business —
            generate more opportunities and convert them automatically.
          </p>

          <ul className={styles.features}>
            <li className={styles.featureItem}>
              <span className={styles.checkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              AI agents respond to every lead via SMS & calls
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Automated nurturing and appointment booking
            </li>
            <li className={styles.featureItem}>
              <span className={styles.checkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              CRM pipeline management and commercial support
            </li>
          </ul>
        </div>

        {/* Right Form Card (Embedded GHL Form) */}
        <div className={styles.card}>
          <div className={styles.formWrapper}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/e1orkNoLeGHCpsbd1pfo"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
              id="inline-e1orkNoLeGHCpsbd1pfo"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website Form"
              data-height="656"
              data-layout-iframe-id="inline-e1orkNoLeGHCpsbd1pfo"
              data-form-id="e1orkNoLeGHCpsbd1pfo"
              title="Website Form"
            ></iframe>
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
          </div>
          <div className={styles.legalWidget}>
            <p className={styles.legalText}>
              By submitting, you agree to our <a href="https://www.reinn.biz/terms-and-conditions" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>Terms & Conditions</a> and <a href="https://www.reinn.biz/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
