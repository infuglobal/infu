import { FC } from 'react';

const Benefits: FC = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Benefits of Using Visual Tools</h1>
        </div>

        {/* Benefits List Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li><strong className="text-purple-600">Clarity:</strong> Complex data is simplified into easy-to-understand visuals.</li>
            <li><strong className="text-purple-600">Efficiency:</strong> Quickly identify the best opportunities without sifting through lengthy reports.</li>
            <li><strong className="text-purple-600">Informed Decisions:</strong> Data-driven insights reduce emotional bias and guesswork.</li>
            <li><strong className="text-purple-600">Portfolio Optimization:</strong> Ensure a balanced portfolio by monitoring diversification.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Benefits;
