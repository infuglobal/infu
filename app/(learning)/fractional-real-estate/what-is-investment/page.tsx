import { FC } from 'react';

const WhatIsInvestment: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">What is Fractional Real Estate Investment?</h1>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-600 mb-4">
            Fractional real estate investment allows multiple investors to pool their resources to own a portion of a property. This model makes it possible to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-sm text-gray-600">
              <strong className="font-semibold text-gray-900">Lower Entry Barriers:</strong> Invest in premium properties with as little as ₹1.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="font-semibold text-gray-900">Earn Passive Income:</strong> Receive your share of rental income and property appreciation.
            </li>
            <li className="text-sm text-gray-600">
              <strong className="font-semibold text-gray-900">Diversify Investments:</strong> Spread your capital across multiple properties to reduce risk.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default WhatIsInvestment;
