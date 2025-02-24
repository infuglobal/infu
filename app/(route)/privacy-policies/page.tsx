import React from "react";
import { FaLock, FaUserShield, FaCookieBite, FaGlobe, FaChild } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-4 flex items-center justify-center gap-2">
          <FaLock className="text-purple-600" /> Privacy Policy
        </h1>
        <p className="text-lg text-gray-700">
          This Privacy Policy explains how Infu collects, uses, and discloses personal information. By using our Platform, you consent to the data practices described here.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        {/* Information We Collect */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <FaUserShield className="text-purple-600" /> Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Personal Data:</strong> Name, email, address, phone number (when you register or update your profile).</li>
            <li><strong>Financial Data:</strong> Payment details may be collected by our third-party escrow provider, Tazapay. Infu does not store or control full payment information.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, and other analytics information to improve site functionality.</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Account Creation & Management: To create and manage your user account.</li>
            <li>Payment Processing: To facilitate transactions through Tazapay.</li>
            <li>Customer Support: To respond to inquiries and offer assistance.</li>
            <li>Analytics & Improvements: To analyze usage trends and improve our services.</li>
          </ul>
        </div>

        {/* Cookies & Tracking */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <FaCookieBite className="text-purple-600" /> Cookies & Tracking
          </h2>
          <p className="text-gray-700">
            We may use cookies or similar technologies to enhance user experience. You can control cookie settings in your browser.
          </p>
        </div>

        {/* International Transfers */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <FaGlobe className="text-purple-600" /> International Transfers
          </h2>
          <p className="text-gray-700">
            If you are located outside our operating country, your information may be transferred to—and maintained on—servers located outside of your jurisdiction.
          </p>
        </div>

        {/* Children’s Privacy */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <FaChild className="text-purple-600" /> Children’s Privacy
          </h2>
          <p className="text-gray-700">
            Our services are not intended for users under the age of 13. We do not knowingly collect personal information from minors.
          </p>
        </div>

     
      </div>
    </div>
  );
};

export default PrivacyPolicy;