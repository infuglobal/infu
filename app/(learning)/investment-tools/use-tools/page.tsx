import { FC } from 'react';

const UseTools: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            How to Use Risk-Return Tools Effectively
          </h1>
        </div>

        {/* Instructions List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="text-gray-700 list-inside mb-4">
            <li className="mb-3">
              <strong className="text-purple-600">Navigate to the Visual Dashboard:</strong> Log in to your Infu account and go to the “Risk & Return Analysis” section.
            </li>
            <li className="mb-3">
              <strong className="text-purple-600">Set Your Preferences:</strong> Use filters to focus on:
              <ul className="list-disc list-inside pl-6">
                <li>Risk tolerance (low, medium, high).</li>
                <li>Lock-in period (short, medium, long-term).</li>
                <li>Industry or sector (real estate, startups, retail, etc.).</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong className="text-purple-600">Analyze Key Metrics:</strong> Study risk-return graphs to identify opportunities that balance potential rewards with acceptable risks.
            </li>
            <li className="mb-3">
              <strong className="text-purple-600">Compare Pools:</strong> Use side-by-side comparisons to evaluate multiple pools before making a decision.
            </li>
            <li className="mb-3">
              <strong className="text-purple-600">Leverage AI Insights:</strong> Explore personalized recommendations based on your goals and past investments.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default UseTools;
