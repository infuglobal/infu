import { FC } from 'react';

const KeyFeatures: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Key Features of Infu’s Visualization Tools
          </h1>
        </div>

        {/* Key Features List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-gray-700 mb-4"><strong className="text-black">Key Features Overview:</strong></p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li><strong className="text-purple-600">Risk-Return Graphs:</strong> Plots risk levels (low, medium, high) against expected returns. Provides a quick snapshot of where an investment stands.</li>
            <li><strong className="text-purple-600">Performance Trends:</strong> Line charts showing historical performance and projected growth.</li>
            <li><strong className="text-purple-600">Portfolio Diversification Maps:</strong> Displays how your investments are distributed across industries and risk levels.</li>
            <li><strong className="text-purple-600">AI-Powered Insights:</strong> Highlights pools with high potential based on your investment history and preferences.</li>
            <li><strong className="text-purple-600">Interactive Filters:</strong> Sort opportunities by ROI, risk, lock-in period, and funding status.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default KeyFeatures;
