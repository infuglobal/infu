import React from "react";

export default function BuildWealth() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">
            Steps to Build Wealth with Small Investments
          </h1>
        </div>

        {/* Steps List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Set a Goal:</strong> Define your financial objectives (e.g., buying a house, starting a business, or retiring early).
            </li>
            <li>
              <strong className="text-purple-600">Start Investing Today:</strong> Even a ₹1 investment can grow significantly with time and compounding.
            </li>
            <li>
              <strong className="text-purple-600">Reinvest Earnings:</strong> Avoid withdrawing returns unnecessarily; reinvest them to accelerate growth.
            </li>
            <li>
              <strong className="text-purple-600">Monitor Progress:</strong> Use Infu’s dashboard to track your investment growth and adjust strategies as needed.
            </li>
            <li>
              <strong className="text-purple-600">Stay Consistent:</strong> Make regular investments, regardless of the amount. Consistency is key.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
