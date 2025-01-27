import { FC } from 'react';

const PassiveIncome: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">How You Earn Passive Income</h1>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <ul className="space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-gray-900">Rental Income:</strong> Properties generate rental income, which is distributed among investors based on their ownership percentage.
            </li>
            <li>
              <strong className="text-gray-900">Property Appreciation:</strong> As property value increases, your fractional ownership gains value, leading to higher returns when sold.
            </li>
            <li>
              <strong className="text-gray-900">Compounding:</strong> Reinvest your rental income into new real estate pools to multiply your earnings over time.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PassiveIncome;
