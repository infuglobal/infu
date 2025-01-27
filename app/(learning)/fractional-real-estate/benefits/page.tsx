import { FC } from 'react';

const Benefits: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Benefits of Infu&apos;s Fractional Real Estate</h1>
        </div>

        {/* Benefits List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc ml-6 space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Accessibility:</strong> No need for large down payments or loans. Start small and scale up.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Transparency:</strong> Detailed property metrics, including expected ROI, location details, and rental yield.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Professional Management:</strong> Properties are managed by professionals, so you don&apos;t have to worry about day-to-day tasks like maintenance or tenant management.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Risk Mitigation:</strong> Invest in diverse properties across multiple locations to minimize risks.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Liquidity:</strong> Infu&apos;s marketplace allows you to sell your fractional ownership when needed.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Benefits;
