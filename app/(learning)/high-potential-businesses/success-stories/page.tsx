// pages/high-potential-businesses/success-stories.tsx
const SuccessStories = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                        Case Studies: Success Stories on Infu
                    </h1>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Startup Breakthrough:</strong> A tech startup raised ₹1 crore through Infu and launched a revolutionary product. Investors saw a 50% return in two years.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Real Estate Growth:</strong> A fractional ownership real estate project generated 18% annual returns for investors by leveraging Infu’s funding model.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                            <strong>Retail Expansion:</strong> A small grocery store raised ₹2 lakh, expanded operations, and increased profits by 30%, delivering attractive returns to investors.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default SuccessStories;
