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
        <h2 className="text-2xl font-bold mb-4">
          How We Collect Your Information
        </h2>
        <p className="text-lg mb-8">
          We collect personal information directly from you when you create an
          account or interact with our website. We also collect usage data
          automatically through cookies and similar technologies.
        </p>
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="text-lg mb-8">
          We use your information to provide and improve our services,
          communicate with you, and analyze usage patterns to enhance user
          experience.
        </p>
        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
        <p className="text-lg mb-8">
          We implement security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmission over the internet or electronic
          storage is 100% secure.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
        <p className="text-lg mb-8">
          We do not sell or rent your personal information to third parties. We
          may share your information with service providers or when required by
          law.
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
          <a href="mailto:kanhaiyasuthar0@gmail.com" className="text-blue-500">
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
