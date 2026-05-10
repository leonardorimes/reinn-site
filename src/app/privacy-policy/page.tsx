import React from "react";
import styles from "../legal.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | REINN",
  description: "Privacy Policy for Reinn Global Business LLC.",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>REINN GLOBAL BUSINESS LLC</div>
          <h1 className={styles.titleSerif}>
            PRIVACY POLICY
          </h1>
          <div className={styles.lastUpdated}>Last Updated: April 28, 2026</div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <p className={styles.text}>
              At Reinn Global Business LLC, accessible from www.reinn.biz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Reinn Global Business LLC and how we use it.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p className={styles.text}>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the Website, or otherwise when you contact us. The personal information we collect may include:
            </p>
            <p className={styles.text}>
              Name and Contact Data (such as email address, phone number, and mailing address).<br />
              Business Information (such as company name and industry).<br />
              Technical Data (such as IP address, browser type, and usage patterns via cookies).
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p className={styles.text}>
              We use the information we collect in various ways, including to:
            </p>
            <p className={styles.text}>
              Provide, operate, and maintain our website and services.<br />
              Improve, personalize, and expand our website.<br />
              Understand and analyze how you use our website.<br />
              Develop new products, services, features, and functionality.<br />
              Communicate with you for customer service, to provide you with updates and other information relating to the website.<br />
              Send you text messages (SMS) and emails if you have opted-in to receive them.
            </p>
          </div>
        </div>

        <div className={styles.contentBoxDashed}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. SMS Messaging & Data Privacy (A2P 10DLC Compliance)</h2>
            <p className={styles.text}>
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
            <p className={styles.text}>
              Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the Text Message services.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. SMS Opt-In and Messaging Details</h2>
            <p className={styles.text}>
              Customers can opt-in to our SMS program through the contact forms available on our website (https://www.reinn.biz). By providing your phone number and checking the consent box, you agree to receive promotional and marketing text messages from Reinn Global Business LLC.
            </p>
            <p className={styles.text}>
              <b>Purpose:</b> Messages are sent to provide updates on consulting services, professional development, and special offers.
            </p>
            <p className={styles.text}>
              <b>Frequency:</b> Message frequency varies based on user interaction and campaign updates.
            </p>
            <p className={styles.text}>
              <b>Opt-Out:</b> You can cancel the SMS service at any time. Just text "STOP" to our number. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time.
            </p>
            <p className={styles.text}>
              <b>Assistance:</b> If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at kaue@reinn.biz.
            </p>
            <p className={styles.text}>
              <b>Rates:</b> As always, message and data rates may apply for any messages sent to you from us and to us from you.
            </p>
            <p className={styles.text}>
              <b>Liability:</b> Carriers are not liable for delayed or undelivered messages.
            </p>
          </div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Cookies and Web Beacons</h2>
            <p className={styles.text}>
              Like any other website, Reinn Global Business LLC uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Third-Party Privacy Policies</h2>
            <p className={styles.text}>
              Reinn Global Business LLC's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. GDPR & CCPA Data Protection Rights</h2>
            <p className={styles.text}>
              Depending on your location, you may have the following rights:
            </p>
            <p className={styles.text}>
              The right to access, rectification, and erasure of your personal data.<br />
              The right to restrict or object to the processing of your data.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Security of Your Information</h2>
            <p className={styles.text}>
              We use administrative, technical, and physical security measures to help protect your personal information.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Changes to This Privacy Policy</h2>
            <p className={styles.text}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p className={styles.text}>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              <br />Reinn Global Business LLC
              <br />Website: www.reinn.biz
              <br />Email: kaue@reinn.biz
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
