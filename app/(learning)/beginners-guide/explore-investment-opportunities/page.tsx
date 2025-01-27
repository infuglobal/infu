import React from 'react';

const Page = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Step 3: Explore Investment Opportunities</h1>
        </div>

        {/* Instructional Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal ml-6 space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Access the Investment Dashboard:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Navigate to the “Investment Opportunities” section.</li>
                <li>Find curated projects categorized by risk, return potential, and industries.</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Analyze Opportunities:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>View detailed metrics like expected returns, lock-in periods, and profit-sharing models.</li>
                <li>Use AI-powered recommendations to identify high-potential investments.</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Shortlist and Compare:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Add opportunities to your favorites list.</li>
                <li>Compare risk-return ratios visually using interactive tools.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Page;
