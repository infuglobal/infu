import { FC } from 'react';

const FAQs: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h1>
        </div>

        {/* FAQs Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">What happens if a property&apos;s value decreases?</strong> Real estate investments carry some risk, but diversification helps minimize overall impact. Infu&apos;s tools can guide you toward low-risk options.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Can I sell my fractional ownership?</strong> Yes, Infu&apos;s marketplace allows you to sell your ownership share to other investors.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">How often is rental income distributed?</strong> Rental income is typically distributed monthly or quarterly, depending on the property.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default FAQs;
