import React from 'react';

const Page = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Step 2: Add Funds to Your Infu Wallet</h1>
        </div>

        {/* Instructional Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal ml-6 space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Choose Your Investment Amount:</strong> Infu offers flexible investment options starting from as low as ₹1, going up to ₹10,00,000.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Add Funds Securely:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use payment methods such as UPI, net banking, or debit/credit cards.</li>
                <li>Once added, funds will appear in your Infu wallet balance.</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Track Your Wallet Balance:</strong> Check your wallet balance at any time through the dashboard.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Page;
