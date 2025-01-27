
import React from "react";

const LearnerDashboard = () => {
 

  return (
    <div className="flex h-screen">
      

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Infinity Learning</h1>
              <p className="text-lg text-gray-700 mb-4">
                Explore our extensive library of resources designed to enhance your understanding of investments, business
                strategies, and advanced financial concepts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {["Investment Basics", "Business Strategies", "Advanced Learning"].map((title, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-600 mt-2">
                      Explore the essential knowledge and advanced strategies to excel in your journey.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          
          
          
        </div>
      </main>
    </div>
  );
};

export default LearnerDashboard;
