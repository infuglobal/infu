import React from "react";

export default function WhySmallInvestments() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">
            Why Small Investments Are Powerful
          </h1>
        </div>

        {/* Key Points Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Accessible to Everyone:</strong> Even with limited income, you can begin building wealth.
            </li>
            <li>
              <strong className="text-purple-600">Reduces Risk:</strong> Small contributions mean less exposure to market fluctuations.
            </li>
            <li>
              <strong className="text-purple-600">Encourages Discipline:</strong> Regular investments help cultivate financial habits that lead to long-term success.
            </li>
            <li>
              <strong className="text-purple-600">Leads to Big Gains:</strong> Over time, the combination of consistency and compounding can achieve life-changing results.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
