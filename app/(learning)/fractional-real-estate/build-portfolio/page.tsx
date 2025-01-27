import { FC } from 'react';

const BuildPortfolio: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Conclusion: Build Your Passive Income Portfolio with Infu</h1>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-sm text-gray-600 mb-4">
            Infu&apos;s fractional real estate model makes property investment accessible, transparent, and profitable for everyone. Whether you&apos;re looking to earn passive income or build long-term wealth, real estate pools on Infu provide a secure and scalable opportunity. Start investing today and watch your wealth grow one property at a time.
          </p>
          <p className="text-sm text-gray-600">
            Explore Real Estate Pools on Infu and begin building your passive income portfolio now!
          </p>
        </div>
      </div>
    </main>
  );
};

export default BuildPortfolio;
