import React from "react";
import { FaInfoCircle, FaShieldAlt, FaBalanceScale, FaLock } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-4 flex items-center justify-center gap-2">
          <FaInfoCircle className="text-purple-600" /> Terms & Conditions
        </h1>
        <p className="text-lg text-gray-700">
          Welcome to Infu. These Terms and Conditions govern your use of our platform and services. By accessing or using Infu, you agree to be bound by these Terms.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        {/* Definitions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <FaShieldAlt className="text-purple-600" /> Definitions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Platform:</strong> Refers to Infu’s website and/or mobile application.</li>
            <li><strong>User:</strong> Refers to anyone who accesses or uses the Platform, including customers and businesses.</li>
            <li><strong>Business:</strong> Means a seller, service provider, or influencer registered on Infu.</li>
            <li><strong>Customer:</strong> Means an individual or entity purchasing a product or service from a Business on the Platform.</li>
          </ul>
        </div>

        {/* Account Registration */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <FaLock className="text-purple-600" /> Account Registration
          </h2>
          <p className="text-gray-700">
            Users must provide accurate information and maintain the security of their account credentials. Infu reserves the right to suspend or terminate accounts for violations of these Terms.
          </p>
        </div>

        {/* Escrow & Payment Processing */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <FaBalanceScale className="text-purple-600" /> Escrow & Payment Processing
          </h2>
          <p className="text-gray-700">
            All financial transactions are facilitated via Tazapay (our third-party escrow provider). By using our Platform, you agree to abide by Tazapay’s terms and policies for payment processing, dispute resolution, and refunds.
          </p>
        </div>

        {/* Fees & Commission */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Fees & Commission</h2>
          <p className="text-gray-700">
            Infu may charge a transaction fee or commission on each sale, displayed at checkout or in your account. You authorize Infu to deduct applicable fees prior to releasing funds to the Business.
          </p>
        </div>

        {/* Refund & Cancellation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Refund & Cancellation</h2>
          <p className="text-gray-700">
            Refunds are subject to our Refund Policy and the timelines provided by Tazapay. Infu is not responsible for losses arising from delayed refunds if caused by user error or incomplete information.
          </p>
        </div>

        {/* Dispute Resolution */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Dispute Resolution</h2>
          <p className="text-gray-700">
            If a dispute arises between a Customer and a Business, Infu will assist in communication and resolution efforts. However, final resolution may be determined by Tazapay’s dispute mechanisms. Infu’s liability is limited to the fees collected; we do not guarantee resolution in favor of any party.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default TermsAndConditions;