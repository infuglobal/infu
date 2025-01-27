import React from "react";

const StepsToDiversify = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Steps to Diversify Your Portfolio on Infu
          </h1>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600">Analyze Your Risk Tolerance:</strong> Low Risk, Medium Risk, High Risk.
            </li>
            <li>
              <strong className="text-purple-600">Allocate Investments Across Industries:</strong> Real Estate, Retail, Startups, Government Tenders.
            </li>
            <li>
              <strong className="text-purple-600">Balance Lock-In Periods:</strong> Short-Term, Medium-Term, Long-Term.
            </li>
            <li>
              <strong className="text-purple-600">Use Infu’s Tools:</strong> Explore AI recommendations, monitor portfolio health using Infu’s visual dashboards.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default StepsToDiversify;
