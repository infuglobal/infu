import React from "react";

const BenefitsOfDiversification = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Benefits of Diversification on Infu
          </h1>
        </div>

        {/* Benefits List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600 mr-2">Reduced Dependency:</strong>
              Avoid relying on a single investment for returns.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Maximized Potential:</strong>
              Capture opportunities across various sectors.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Tailored Strategies:</strong>
              Infu’s tools help personalize and adjust your portfolio.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Peace of Mind:</strong>
              Minimized risks lead to greater confidence in your investments.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BenefitsOfDiversification;
