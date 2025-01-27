import React from "react";

const EffectiveFundManagement = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Tips for Effective Fund Management
          </h1>
        </div>

        {/* Tips Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Set Goals:</strong> Define financial objectives for withdrawals, such as reinvestment or personal expenses.
            </li>
            <li>
              <strong className="text-purple-600">Keep a Balanced Portfolio:</strong> Withdraw only a portion of profits and reinvest the rest to ensure continuous growth.
            </li>
            <li>
              <strong className="text-purple-600">Use Notifications:</strong> Stay informed about profit availability and optimal reinvestment opportunities.
            </li>
            <li>
              <strong className="text-purple-600">Monitor Regularly:</strong> Regularly review your portfolio to adapt to changing market conditions and optimize your strategy.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default EffectiveFundManagement;
