// pages/high-potential-businesses/market-trends.tsx
const MarketTrends = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Step 5: Stay Updated on Market Trends
                    </h1>
                </div>

                {/* Content Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li><strong>Explore Emerging Sectors:</strong> Keep an eye on industries like renewable energy, technology, and healthcare that are expected to grow rapidly.</li>
                        <li><strong>Seasonal Opportunities:</strong> Invest in businesses that thrive during specific seasons (e.g., retail during festive periods).</li>
                        <li><strong>Global Trends:</strong> Monitor global economic trends that could influence local business performance.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default MarketTrends;
