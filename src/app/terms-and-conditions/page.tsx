import React from "react";
import styles from "../legal.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | REINN",
  description: "Terms and Conditions for REINN Global Marketing LLC.",
};

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>REINN GLOBAL MARKETING LLC</div>
          <h1 className={styles.title}>
            Terms and <span className={styles.titleUnderline}>Conditions</span>
          </h1>
          <div className={styles.lastUpdated}>Last Updated: April 27, 2026</div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>TERMS AND CONDITIONS</h2>
            <p className={styles.lastUpdated} style={{ marginBottom: '16px' }}>Last Updated: April 27, 2026</p>
            <p className={styles.text}>
              Welcome to Reinn Global Marketing LLC. These Terms and Conditions ("Terms") govern your use of our website (www.reinn.biz) and our services. By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Services Provided</h2>
            <p className={styles.text}>
              Reinn Global Marketing LLC provides digital marketing solutions, including but not limited to CRM automation, lead generation, and communication services. We reserve the right to modify or discontinue any service at our discretion.
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
              <b>Program Name:</b> Reinn Global Marketing LLC.
            </p>
            <p className={styles.text}>
              <b>Program Description:</b> By providing your phone number and opting in via our web forms, you may receive text messages related to appointment reminders, service updates, account notifications, and promotional marketing offers.
            </p>
            <p className={styles.text}>
              <b>Cancellation:</b> You can cancel the SMS service at any time. Simply text "STOP" to the number you are receiving messages from. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
            </p>
            <p className={styles.text}>
              <b>Support:</b> For issues with our messaging service, you can reply with the keyword "HELP" for assistance or contact our support team at kaue@reinn.biz.
            </p>
            <p className={styles.text}>
              <b>Carrier Liability:</b> Carriers are not liable for delayed or undelivered messages.
            </p>
            <p className={styles.text}>
              <b>Rates and Frequency:</b> As always, message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your interaction with us and the nature of the campaign. For questions about your text plan or data plan, contact your wireless provider.
            </p>
            <p className={styles.text}>
              <b>Privacy:</b> For privacy-related inquiries, please refer to our Privacy Policy at <Link href="/privacy-policy" className={styles.link}>https://www.reinn.biz/privacy-policy</Link>.
            </p>
          </div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
            <p className={styles.text}>
              All content on this website, including logos, text, graphics, and software, is the property of Reinn Global Marketing LLC and is protected by copyright and intellectual property laws. You may not reproduce or distribute any content without express written permission.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
            <p className={styles.text}>
              Reinn Global Marketing LLC shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Termination</h2>
            <p className={styles.text}>
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Governing Law</h2>
            <p className={styles.text}>
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State in which Reinn Global Marketing LLC is registered, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Changes to Terms</h2>
            <p className={styles.text}>
              We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the service after changes are posted constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p className={styles.text}>
              If you have any questions about these Terms, please contact us at:
              <br />Reinn Global Marketing LLC
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
            &copy; 2026 Reinn Global Marketing LLC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
