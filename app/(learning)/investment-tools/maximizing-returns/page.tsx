import { FC } from 'react';

const MaximizingReturns: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Tips for Maximizing Returns with Infu’s Tools
          </h1>
        </div>

        {/* Tips List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-gray-700 mb-4"><strong className="text-black">Maximizing Returns Overview:</strong></p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li><strong className="text-purple-600">Review Regularly:</strong> Monitor your portfolio and new opportunities weekly.</li>
            <li><strong className="text-purple-600">Diversify Wisely:</strong> Use the diversification map to spread investments across sectors and risk levels.</li>
            <li><strong className="text-purple-600">Set Realistic Goals:</strong> Align your investment choices with achievable financial objectives.</li>
            <li><strong className="text-purple-600">Stay Updated:</strong> Enable notifications for real-time updates on pool performance and trends.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MaximizingReturns;
