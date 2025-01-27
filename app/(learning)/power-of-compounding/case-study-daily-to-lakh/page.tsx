import React from "react";

export default function CaseStudyDailyToLakh() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">
            Case Study: Turning ₹1 Daily into ₹1 Lakh
          </h1>
        </div>

        {/* Introduction */}
        <p className="text-gray-700 mb-4">
          Discover how Raj, a college student, turned his small daily contributions into financial freedom:
        </p>

        {/* Investor Details */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">The Investor:</h2>
        <p className="text-gray-700">
          Raj, a college student, started investing ₹1 daily on Infu.
        </p>

        {/* Strategy */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">The Strategy:</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Low-risk micro pools with an average annual return of 15%.</li>
            <li>Reinvested all his earnings into similar pools.</li>
          </ul>
        </div>

        {/* Result */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">The Result:</h2>
        <p className="text-gray-700">
          After 10 years, Raj’s daily contributions had grown to over ₹1 lakh, giving him financial stability before graduation.
        </p>
      </div>
    </main>
  );
}
