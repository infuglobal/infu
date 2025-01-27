import { FC } from 'react';

const Introduction: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            How to Use Infu’s Visual Tools to Make Smart Investment Decisions
          </h1>
        </div>

        {/* Introduction Text Section */}
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            <strong className="text-purple-600">The Opportunity:</strong> Understanding the risks and returns of an investment is key to making informed decisions. Infu’s platform offers advanced visual tools to help you assess investment opportunities quickly and confidently.
          </p>
        </div>

        {/* Visual Tools Overview */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-gray-700 mb-4"><strong className="text-purple-600">Visual Tools Overview:</strong></p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold text-purple-600">Risk-return visualization tools:</span> Evaluate the balance between risk and return.</li>
            <li><span className="font-semibold text-purple-600">Historical performance charts:</span> Identify growth patterns and trends.</li>
            <li><span className="font-semibold text-purple-600">Portfolio diversification maps:</span> Ensure a well-rounded and balanced investment portfolio.</li>
          </ul>
        </div>

        {/* Decision Section */}
        <p className="text-gray-700">
          <strong className="text-purple-600">Decision:</strong> Leverage Infu&apos;s tools to make smarter, data-driven investment decisions, maximizing your potential returns while minimizing risk.
        </p>
      </div>
    </main>
  );
};

export default Introduction;
