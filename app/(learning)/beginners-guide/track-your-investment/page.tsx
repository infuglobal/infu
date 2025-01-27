import React from 'react';

const Page = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Step 5: Track Your Investment</h1>
        </div>

        {/* Instructional Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal ml-6 space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Monitor Progress:</strong> Track your investment&apos;s performance in real time via the dashboard.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Profit Withdrawal:</strong> Withdraw your earnings instantly once the lock-in period ends.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Get Notifications:</strong> Enable notifications to stay updated on new opportunities and milestones.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Page;
