import React from "react";

export default function LeverageCompounding() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">
            How Infu Helps You Leverage Compounding
          </h1>
        </div>

        {/* Steps to Leverage Compounding */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Start Small:</strong> Infu’s pools allow you to invest as little as ₹1, making compounding accessible to everyone.
            </li>
            <li>
              <strong className="text-purple-600">Frequent Opportunities:</strong> Reinvest your earnings into new pools frequently to maximize growth.
            </li>
            <li>
              <strong className="text-purple-600">Diverse Investments:</strong> Spread your contributions across multiple industries, reducing risk and ensuring steady returns.
            </li>
            <li>
              <strong className="text-purple-600">AI-Driven Recommendations:</strong> Infu’s AI suggests pools with high compounding potential, tailored to your preferences.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
