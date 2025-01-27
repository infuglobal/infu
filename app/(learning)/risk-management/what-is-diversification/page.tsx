import React from "react";

const WhatIsDiversification = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            What is Diversification?
          </h1>
        </div>

        {/* Description Section */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Diversification involves spreading your investments across different projects, industries, and risk levels to reduce exposure to any single investment’s potential downturn. A well-diversified portfolio ensures:
        </p>

        {/* Benefits List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600">Risk Reduction:</strong> Minimizes losses by spreading exposure.
            </li>
            <li>
              <strong className="text-purple-600">Steady Returns:</strong> Balances high-risk, high-reward investments with safer options.
            </li>
            <li>
              <strong className="text-purple-600">Improved Resilience:</strong> Shields your portfolio from market fluctuations.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default WhatIsDiversification;
