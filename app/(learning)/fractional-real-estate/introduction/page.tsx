import { FC } from 'react';

const Introduction: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Achieving Passive Income with Infu&apos;s Fractional Real Estate</h1>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-600">
            Real estate has long been considered one of the safest and most rewarding investments. However, traditional real estate investment often requires substantial capital, making it inaccessible to many. Infu&apos;s fractional real estate model changes the game, allowing you to invest in high-value properties with minimal amounts and earn passive income. This guide will show you how to leverage Infu&apos;s real estate pools for steady and secure financial growth.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Introduction;
