// pages/high-potential-businesses/evaluate-risks.tsx
const EvaluateRisks = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Step 4: Evaluate Risk Levels
                    </h1>
                </div>

                {/* Content Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li>
                            <strong className="font-semibold text-gray-900">Low Risk:</strong> Established businesses with proven track records.
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">Medium Risk:</strong> Growing companies with strong potential but moderate uncertainty.
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">High Risk:</strong> Startups and innovative projects with significant upside but greater risk.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default EvaluateRisks;
