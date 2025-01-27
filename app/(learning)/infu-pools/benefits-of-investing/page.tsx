const BenefitsOfInvesting = () => {
    return (
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Benefits of Investing in Infu Pools
            </h1>
          </div>
  
          {/* Content Section */}
          <div className="space-y-6">
            <ul className="list-disc pl-6 space-y-4 text-gray-600">
              <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Low Entry Barriers:</strong> Start investing with as little as ₹1.
              </li>
              <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Shared Risk:</strong> Contributions are spread across multiple investors, reducing individual exposure.
              </li>
              <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Diverse Opportunities:</strong> Invest in industries ranging from retail to real estate.
              </li>
              <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>AI-Driven Insights:</strong> Leverage Infu&apos;s AI tools for personalized recommendations.
              </li>
              <li className="transition-transform transform hover:scale-105 hover:bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Real-Time Tracking:</strong> Monitor investments and profits via the dashboard.
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  };
  
  export default BenefitsOfInvesting;
  