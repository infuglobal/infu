import React from "react";

export default function MathBehindSmallInvestments() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">
            The Math Behind Small Investments
          </h1>
        </div>

        {/* Introduction Section */}
        <p className="text-gray-700 mb-4">
          Here’s how small investments can grow significantly over time with consistent contributions and compounding returns:
        </p>

        {/* Daily Investments Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Investments:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Investing ₹1 daily at 12% annual returns:</li>
            <ul className="list-inside list-disc ml-6">
              <li>1 Year: ₹3,846</li>
              <li>5 Years: ₹21,645</li>
              <li>10 Years: ₹58,486</li>
            </ul>
          </ul>
        </div>

        {/* Monthly Investments Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Monthly Investments:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Investing ₹100 monthly at 12% annual returns:</li>
            <ul className="list-inside list-disc ml-6">
              <li>1 Year: ₹1,268</li>
              <li>5 Years: ₹6,747</li>
              <li>10 Years: ₹21,004</li>
            </ul>
          </ul>
        </div>
      </div>
    </main>
  );
}
