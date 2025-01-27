import { FC } from 'react';

const HowToInvest: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">How to Invest in Real Estate on Infu</h1>
        </div>

        {/* How-to Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Explore Property Listings:</strong> Browse Infu&apos;s curated list of high-potential properties categorized by rental income, capital appreciation, and risk level.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Analyze Metrics:</strong> Review essential details, including property type (residential, commercial, etc.), location analysis, historical performance (if applicable), and projected ROI.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Select a Pool:</strong> Choose a property pool that aligns with your financial goals and risk appetite.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Contribute Your Investment:</strong> Enter the amount you wish to invest. Your contribution secures a proportionate share of the property.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Monitor Your Returns:</strong> Track rental income and property appreciation via the Infu dashboard.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HowToInvest;
