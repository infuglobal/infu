import React from 'react';

const Page = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Step 4: Make Your First Investment</h1>
        </div>

        {/* Instructional Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal ml-6 space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Choose a Project:</strong> Select a project that aligns with your goals.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Review Terms:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Funding goal</li>
                <li>Expected ROI</li>
                <li>Lock-in period</li>
                <li>Risk analysis</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Confirm Your Investment:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Enter the amount you want to invest and confirm your selection.</li>
                <li>Your funds will be securely allocated to the chosen project.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Page;
