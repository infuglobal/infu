import React from "react";

const ReinvestingProfits = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Step 4: Reinvesting Profits
          </h1>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Explore New Opportunities:</strong>
              <p className="ml-4">
                Use your profits to invest in new pools for compounding benefits. Reinvestment allows your earnings to grow exponentially over time.
              </p>
            </li>
            <li>
              <strong className="text-purple-600">AI Recommendations:</strong>
              <p className="ml-4">
                Infu’s AI tools will suggest high-performing pools for reinvestment based on your preferences and past investment history.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default ReinvestingProfits;
