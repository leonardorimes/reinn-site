import React from "react";
import styles from "../legal.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | REINN",
  description: "Privacy Policy for REINN Global Marketing LLC.",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>REINN GLOBAL MARKETING LLC</div>
          <h1 className={styles.titleSerif}>
            TERMS AND CONDITIONS
          </h1>
          <div className={styles.lastUpdated}>Last Updated: April 27, 2026</div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <p className={styles.text}>
              At Reinn Global Marketing LLC, accessible from www.reinn.biz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Reinn Global Marketing LLC and how we use it.
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
              Customers can opt-in to our SMS program through the contact forms available on our website (https://www.reinn.biz). By providing your phone number and checking the consent box, you agree to receive promotional and marketing text messages from Reinn Global Marketing LLC.
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
              Like any other website, Reinn Global Marketing LLC uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
            <p className={styles.text}>
              Reinn Global Marketing LLC's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
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
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              <br />Reinn Global Marketing LLC Website: www.reinn.biz
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
