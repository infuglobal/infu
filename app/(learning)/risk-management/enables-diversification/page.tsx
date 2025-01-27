import React from "react";

const HowInfuEnablesDiversification = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            How Infu Enables Diversification
          </h1>
        </div>

        {/* Introduction Section */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Infu’s platform is designed to help investors build a diversified portfolio effortlessly with features such as:
        </p>

        {/* Features List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600 mr-2">Wide Range of Investment Pools:</strong>
              Micro, medium, and macro pools catering to all budgets and goals.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Risk Categorization:</strong>
              Pools are classified as low, medium, or high risk, making it easy to balance your portfolio.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">AI-Driven Recommendations:</strong>
              Personalized suggestions based on your investment history and risk appetite.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Real-Time Metrics:</strong>
              Detailed insights into expected returns, funding goals, and lock-in periods.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HowInfuEnablesDiversification;
