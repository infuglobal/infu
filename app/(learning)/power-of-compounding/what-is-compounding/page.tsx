import React from "react";

export default function WhatIsCompounding() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-600">
            What Is Compounding?
          </h1>
        </div>

        {/* Explanation Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <p className="text-gray-700 mb-4">
            Compounding is the process where your investments earn returns, and those returns are reinvested to generate even more returns. Over time, this creates a snowball effect, multiplying your initial investment into a significant amount.
          </p>
        </div>

        {/* Example Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Example:</h2>
          <p className="text-gray-700">
            If you invest ₹1 daily at an annual return of 10%, in 10 years, you could accumulate over ₹36,000 just by reinvesting your returns.
          </p>
        </div>
      </div>
    </main>
  );
}
