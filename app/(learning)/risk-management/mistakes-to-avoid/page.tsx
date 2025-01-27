import React from "react";

const MistakesToAvoid = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Mistakes to Avoid When Diversifying
          </h1>
        </div>

        {/* Tips List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600 mr-2">Over-Diversification:</strong>
              Spreading investments too thin can dilute returns.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Ignoring Risk Levels:</strong>
              Focusing solely on high-risk pools may lead to significant losses.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Neglecting Monitoring:</strong>
              Failing to track and rebalance your portfolio.
            </li>
            <li>
              <strong className="text-purple-600 mr-2">Lack of Goal Alignment:</strong>
              Choose pools that match your financial objectives.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MistakesToAvoid;
