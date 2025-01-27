import React from "react";

const AccessDashboard = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Step 1: Access the Infu Dashboard
          </h1>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong className="text-purple-600">Log In:</strong>
              <p className="ml-4">
                Visit the Infu website or open the mobile app. Use your registered email ID and password to log in securely.
              </p>
            </li>
            <li>
              <strong className="text-purple-600">Navigate to the Dashboard:</strong>
              <p className="ml-4">
                The dashboard is your central hub for all investments. Access the “My Investments” section to view active and completed investments.
              </p>
            </li>
            <li>
              <strong className="text-purple-600">Track Your Progress:</strong>
              <p className="ml-4">Monitor real-time metrics, including:</p>
              <ul className="list-disc ml-10">
                <li>Current portfolio value</li>
                <li>Total profits earned</li>
                <li>Remaining lock-in periods</li>
                <li>Upcoming profit-sharing dates</li>
              </ul>
            </li>
            <li>
              <strong className="text-purple-600">Get Notifications:</strong>
              <p className="ml-4">
                Enable alerts to receive updates on returns, milestones, and new opportunities.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default AccessDashboard;
