import { FC } from 'react';

const SmarterDecisions: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Conclusion: Smarter Investment Decisions with Infu’s Visual Tools
          </h1>
        </div>

        {/* Conclusion Text Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-gray-700 mb-4">
            Infu’s risk-return visualization tools make it easier than ever to analyze and optimize your investments. By leveraging these features, you can confidently identify opportunities that align with your goals, manage risks effectively, and build a robust portfolio.
          </p>
          <p className="text-gray-700 mb-6">
            Start exploring Infu’s visual dashboard today and take the guesswork out of investing.
          </p>
        </div>

        {/* Call to Action */}
        <p className="text-purple-600 font-semibold">
          Access Infu’s Visual Dashboard Now and make smarter investment decisions with ease!
        </p>
      </div>
    </main>
  );
};

export default SmarterDecisions;
