import { FC } from 'react';

const AnalyzingPool: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Example: Analyzing a High-Potential Pool</h1>
        </div>

        {/* Opportunity Description */}
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            <strong>The Opportunity:</strong> A medium-risk retail business offering <span className="font-semibold text-purple-500">15% annual returns</span>.
          </p>
        </div>

        {/* Visual Analysis Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-gray-700 mb-4"><strong>Visual Analysis:</strong></p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Risk-return graph shows medium risk and above-average returns.</li>
            <li>Historical performance chart indicates consistent growth over the last year.</li>
            <li>Diversification map confirms this investment complements your portfolio.</li>
          </ul>
        </div>

        {/* Decision Section */}
        <p className="text-gray-700">
          <strong>Decision:</strong> Confidently invest, knowing it aligns with your goals and portfolio strategy.
        </p>
      </div>
    </main>
  );
};

export default AnalyzingPool;
