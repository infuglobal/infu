import React from "react";

const DashboardIntroduction = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">
            Introduction to Infu&apos;s Dashboard
          </h1>
        </div>

        {/* Introduction Content */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Tracking your investments and withdrawing your earnings seamlessly is an essential part of building wealth. Infu provides a user-friendly dashboard and instant withdrawal features to ensure you stay in control of your finances.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This guide will show you how to monitor your investments and withdraw your profits quickly and securely.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DashboardIntroduction;
