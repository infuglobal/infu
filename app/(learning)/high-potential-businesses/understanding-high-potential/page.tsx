// pages/high-potential-businesses/understanding-high-potential.tsx
const UnderstandingHighPotential = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Step 1: Understand What Makes a Business High-Potential
                    </h1>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Strong Revenue Model:</strong> Businesses with clear, sustainable revenue streams are more likely to deliver consistent returns.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Scalable Operations:</strong> Companies that can expand operations easily when funding is available.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Growing Market Demand:</strong> Focus on industries experiencing rapid growth or high demand.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Track Record:</strong> Businesses with a history of meeting targets and generating profits.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default UnderstandingHighPotential;
