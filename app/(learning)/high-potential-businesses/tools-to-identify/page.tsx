// pages/high-potential-businesses/tools-to-identify.tsx
const ToolsToIdentify = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Step 2: Use Infu’s Tools to Identify Opportunities
                    </h1>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>AI-Powered Recommendations:</strong> Infu’s algorithms analyze metrics such as ROI, risk level, and market trends to suggest high-performing pools.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Industry Categorization:</strong> Browse businesses by industry (e.g., retail, real estate, startups) to find sectors you’re interested in.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Risk-Return Insights:</strong> Evaluate detailed metrics for each investment opportunity, including projected returns and risk scores.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Trending Businesses Section:</strong> Explore the “Trending” section to see which pools are attracting significant attention from investors.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default ToolsToIdentify;
