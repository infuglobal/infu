import React from "react";

const SamplePortfolio = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Diversification in Action: Sample Portfolio
          </h1>
        </div>

        {/* Portfolio Content */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Here’s an example of a balanced Infu portfolio:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600">10% in Low-Risk Real Estate Pools:</strong> Steady returns from rental properties.
            </li>
            <li>
              <strong className="text-purple-600">20% in Medium-Risk Retail Businesses:</strong> Daily profit-sharing projects like food vendors.
            </li>
            <li>
              <strong className="text-purple-600">30% in Medium-Risk Startups:</strong> Promising growth potential with moderate risk.
            </li>
            <li>
              <strong className="text-purple-600">40% in High-Risk Government Tenders:</strong> High ROI from large-scale, time-sensitive projects.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SamplePortfolio;
