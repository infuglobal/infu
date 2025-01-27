// pages/high-potential-businesses/diversify-investments.tsx
const DiversifyInvestments = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Step 6: Diversify Your Investments
                    </h1>
                </div>

                {/* Content Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li>
                            <strong className="font-semibold text-gray-900">Spread Across Sectors:</strong> Avoid putting all your funds into one industry. Diversify across multiple sectors to balance risk.
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">Mix Risk Levels:</strong> Combine low, medium, and high-risk pools for a well-rounded portfolio.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default DiversifyInvestments;
