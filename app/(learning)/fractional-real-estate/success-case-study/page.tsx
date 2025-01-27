import { FC } from 'react';

const SuccessCaseStudy: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Case Study: Fractional Ownership Success</h1>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-600">
            <strong className="font-semibold text-gray-900">The Investor:</strong> Priya, a working professional, started with an investment of ₹10,000 in a commercial property pool.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong className="font-semibold text-gray-900">The Outcome:</strong> Within a year, Priya earned ₹1,500 in rental income and saw her investment grow by 8% due to property appreciation.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong className="font-semibold text-gray-900">Next Steps:</strong> Priya reinvested her earnings into a residential property pool, further diversifying her portfolio and increasing her passive income.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SuccessCaseStudy;
