// pages/high-potential-businesses/analyze-metrics.tsx
const AnalyzeMetrics = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Step 3: Analyze Business Metrics
                    </h1>
                </div>

                {/* Content Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li>
                            <strong className="font-semibold text-gray-900">Projected Returns:</strong> Look for businesses offering competitive ROI compared to others in the same category.
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">Funding Goals:</strong> Assess whether the funding goal aligns with the scope of the business. Unrealistic targets can be a red flag.
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">Profit Sharing Model:</strong> Understand how profits will be distributed among investors.
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">Execution Plan:</strong> Review the business’s plan to use the funds effectively and achieve growth.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default AnalyzeMetrics;
