// pages/high-potential-businesses/tips-for-spotting.tsx
const TipsForSpotting = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Tips for Spotting High-Potential Businesses
                    </h1>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Start Small:</strong> Test with smaller investments to understand market dynamics before scaling up.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Leverage AI Insights:</strong> Trust Infu’s data-driven recommendations to guide your decisions.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Stay Informed:</strong> Read market news and updates to align your investments with current trends.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Engage with Businesses:</strong> Use Infu’s platform to ask questions and clarify doubts directly with business owners.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default TipsForSpotting;
