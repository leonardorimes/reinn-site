import React from "react";
import styles from "../legal.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | REINN",
  description: "Terms and Conditions for Reinn Global Business LLC.",
};

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>REINN GLOBAL BUSINESS LLC</div>
          <h1 className={styles.titleSerif}>
            TERMS AND CONDITIONS
          </h1>
          <div className={styles.lastUpdated}>Last Updated: April 27, 2026</div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <p className={styles.text}>
              Welcome to Reinn Global Business LLC. These Terms and Conditions ("Terms") govern your use of our website (www.reinn.biz) and our services. By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Services Provided</h2>
            <p className={styles.text}>
              Reinn Global Business LLC provides digital marketing solutions, including but not limited to CRM automation, lead generation, and communication services. We reserve the right to modify or discontinue any service at our discretion.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. User Obligations</h2>
            <p className={styles.text}>
              By using this site, you represent that you are at least 18 years of age. You agree to provide accurate information when filling out forms and to use our services only for lawful purposes.
            </p>
          </div>
        </div>

        <div className={styles.contentBoxDashed}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. SMS Terms of Service (A2P 10DLC Compliance)</h2>
            <p className={styles.text}>
              We value your privacy and your preference for how we communicate with you.
            </p>
            <p className={styles.text}>
              <b>Business Name:</b> Reinn Global Business LLC.
            </p>
            <p className={styles.text}>
              <b>Program Description:</b> By providing your phone number and opting in via our web forms, you are consenting to receive text messages from us. You can expect to receive messages regarding appointment reminders, service updates, account notifications, professional development tips, and promotional marketing offers related to our consulting and automation services.
            </p>
            <p className={styles.text}>
              <b>Cancellation:</b> You can cancel the SMS service at any time. Just text "STOP" to +1 (407) 753-7274. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
            </p>
            <p className={styles.text}>
              <b>Assistance:</b> If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at kaue@reinn.biz.
            </p>
            <p className={styles.text}>
              <b>Carrier Liability:</b> Carriers are not liable for delayed or undelivered messages.
            </p>
            <p className={styles.text}>
              <b>Rates and Frequency:</b> As always, message and data rates may apply for any messages sent to you from us and to us from you. You will receive message frequency based on your interaction with us and the nature of the campaign (e.g., up to 4 messages per month). If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
            </p>
            <p className={styles.text}>
              <b>Privacy:</b> If you have any questions regarding privacy, please read our privacy policy: <Link href="/privacy-policy" className={styles.link}>https://www.reinn.biz/privacy-policy</Link>.
            </p>
          </div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
            <p className={styles.text}>
              All content on this website, including logos, text, graphics, and software, is the property of Reinn Global Business LLC and is protected by copyright and intellectual property laws.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
            <p className={styles.text}>
              Reinn Global Business LLC shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Termination</h2>
            <p className={styles.text}>
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to our business interests.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Governing Law</h2>
            <p className={styles.text}>
              These Terms shall be governed by and construed in accordance with the laws of the United States.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Changes to Terms</h2>
            <p className={styles.text}>
              We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p className={styles.text}>
              If you have any questions about these Terms, please contact us at:
              <br />Reinn Global Business LLC
              <br />Email: kaue@reinn.biz
              <br />Website: www.reinn.biz
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.logoBox}>
            <img src="/logo.png" alt="REINN Logo" className={styles.footerLogo} />
          </div>
          <div className={styles.footerLinks}>
            Email: kaue@reinn.biz | Website: www.reinn.biz
          </div>
          <div className={styles.footerCopy}>
            &copy; 2026 Reinn Global Business LLC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
