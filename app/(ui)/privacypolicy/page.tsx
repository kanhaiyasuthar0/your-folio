import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-8">
          Privacy Policy for YourFolio
        </h1>
        <p className="text-lg mb-8">
          At YourFolio, we take your privacy seriously and are committed to
          protecting the personal information of our users. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your information
          when you use our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-8 mb-8">
          <li>
            Personal Information: When you create an account on YourFolio, we
            may collect personal information such as your name, email address,
            and any other information you voluntarily provide.
          </li>
          <li>
            User-Generated Content: When you post folios or share content on
            YourFolio, we collect the information you provide, including text,
            images, and other media.
          </li>
          <li>
            Usage Data: We automatically collect information about your
            interaction with our website, including your IP address, browser
            type, operating system, and pages visited.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="text-lg mb-8">
          To Provide and Improve Our Services: We use your information to
          operate, maintain, and improve YourFolio, including providing
          personalized features and content. Communication: We may use your
          email address to send you updates, newsletters, and other
          communications related to your account or our services. Analytics: We
          use usage data to analyze trends, track user engagement, and improve
          the functionality and user experience of YourFolio.
        </p>
        <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
        <ul className="list-disc pl-8 mb-8">
          <li>
            With Your Consent: We may share your information with third parties
            when you give us consent to do so, such as sharing your folios with
            other users.
          </li>
          <li>
            Service Providers: We may share your information with third-party
            service providers who assist us in operating our website, conducting
            our business, or servicing you.
          </li>
          <li>
            Legal Compliance: We may disclose your information if required by
            law or to protect our rights or the rights of others.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
        <p className="text-lg mb-8">
          We implement security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h2 className="text-2xl font-bold mb-4">Children’s Privacy</h2>
        <p className="text-lg mb-8">
          YourFolio is not intended for use by children under the age of 13. We
          do not knowingly collect personal information from children under 13.
          If you are a parent or guardian and believe that your child has
          provided us with personal information, please contact us, and we will
          take steps to remove such information from our systems.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-lg mb-8">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:contact@email.com" className="text-blue-500">
            kanhaiyasuthar0@gmail.com
          </a>
          .
        </p>
        <p className="text-lg">
          This Privacy Policy was last updated on 20 March, 2024.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
