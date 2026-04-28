import React from "react";
import styles from "../legal.module.css";
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
            PRIVACY POLICY
          </h1>
          <div className={styles.lastUpdated}>Last Updated: April 27, 2026</div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>PRIVACY POLICY</h2>
            <p className={styles.lastUpdated} style={{ marginBottom: '16px' }}>Last Updated: April 27, 2026</p>
            <p className={styles.text}>
              At Reinn Global Marketing LLC, accessible from www.reinn.biz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Reinn Global Marketing LLC and how we use it.
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
              Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.<br />
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
          </div>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Cookies and Web Beacons</h2>
            <p className={styles.text}>
              Like any other website, Reinn Global Marketing LLC uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Third-Party Privacy Policies</h2>
            <p className={styles.text}>
              Reinn Global Marketing LLC's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. GDPR & CCPA Data Protection Rights</h2>
            <p className={styles.text}>
              Depending on your location, you may have the following rights:
            </p>
            <p className={styles.text}>
              The right to access &ndash; You have the right to request copies of your personal data.<br />
              The right to rectification &ndash; You have the right to request that we correct any information you believe is inaccurate.<br />
              The right to erasure &ndash; You have the right to request that we erase your personal data, under certain conditions.<br />
              The right to restrict processing &ndash; You have the right to request that we restrict the processing of your personal data.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Security of Your Information</h2>
            <p className={styles.text}>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you transmit to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
            <p className={styles.text}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p className={styles.text}>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              <br />Reinn Global Marketing LLC Website: www.reinn.biz
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
            &copy; 2026 Reinn Global Marketing LLC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
