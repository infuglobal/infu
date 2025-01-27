import React from 'react';

const Page = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Step 1: Register on Infu</h1>
        </div>

        {/* Intro Section */}
        <div className="text-sm text-gray-600 mb-8">
          <p>Welcome to Infu! Follow these steps to get started:</p>
        </div>

        {/* Instructional Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal ml-6 space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Sign Up:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Visit the Infu Website or download the Infu mobile app.</li>
                <li>Click on the “Sign Up” button.</li>
                <li>Use your Google account for seamless and quick registration.</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Select Your Role:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Investor : Start investing in opportunities and earn returns.</li>
                <li>Grow Business : Raise funds for your business ideas.</li>
                <li>Learner : Access educational content to enhance your financial literacy.</li>
              </ul>
              <p>For this guide, we&apos;ll focus on the Investor role.</p>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Complete Your Profile:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide basic KYC information for verification (PAN, Aadhaar, etc.).</li>
                <li>Set up a secure password and enable two-factor authentication for added security.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Page;
