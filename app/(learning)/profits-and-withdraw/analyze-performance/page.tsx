import React from "react";

const AnalyzePerformance = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Step 2: Analyze Investment Performance
          </h1>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Review Metrics:</strong>
              <p className="ml-4">
                Check detailed analytics for each investment, such as ROI, historical performance, and risk vs. return ratio.
              </p>
            </li>
            <li>
              <strong className="text-purple-600">Compare Pools:</strong>
              <p className="ml-4">
                Use Infu’s comparison tools to evaluate how different pools are performing.
              </p>
            </li>
            <li>
              <strong className="text-purple-600">Make Data-Driven Decisions:</strong>
              <p className="ml-4">
                Leverage insights to adjust your strategy or reinvest profits.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default AnalyzePerformance;
