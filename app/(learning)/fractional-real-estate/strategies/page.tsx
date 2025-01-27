import { FC } from 'react';

const Strategies: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Real Estate Investment Strategies on Infu</h1>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <ul className="space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-gray-900">Diversify Across Locations:</strong> Invest in properties across different cities to minimize location-specific risks.
            </li>
            <li>
              <strong className="text-gray-900">Combine Property Types:</strong> Balance your portfolio with residential, commercial, and industrial properties.
            </li>
            <li>
              <strong className="text-gray-900">Monitor Market Trends:</strong> Stay updated on real estate trends to identify high-growth areas.
            </li>
            <li>
              <strong className="text-gray-900">Reinvest Earnings:</strong> Use your rental income to fund additional investments for compounded growth.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Strategies;
