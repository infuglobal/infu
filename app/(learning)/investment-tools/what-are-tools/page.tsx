import { FC } from 'react';

const WhatAreTools: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">
            What Are Risk-Return Visual Tools?
          </h1>
        </div>

        {/* Description Section */}
        <p className="text-gray-700 mb-4">
          Infu’s risk-return visual tools provide clear, interactive graphics that make it easy to:
        </p>

        {/* Tools List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="text-gray-700 list-inside">
            <li className="mb-3">
              <strong className="text-purple-600">Evaluate Investment Performance:</strong> Understand potential returns and associated risks.
            </li>
            <li className="mb-3">
              <strong className="text-purple-600">Compare Opportunities:</strong> Visually compare different pools side-by-side.
            </li>
            <li className="mb-3">
              <strong className="text-purple-600">Make Informed Choices:</strong> Use data-driven insights to select investments that align with your financial goals.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default WhatAreTools;
