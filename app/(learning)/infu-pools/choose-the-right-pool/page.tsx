import React from "react";

export default function ChooseTheRightPool() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            How to Choose the Right Pool
          </h1>
        </div>

        {/* Instructional Steps Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
          <ol className="list-decimal ml-6 space-y-4 text-sm text-gray-600">
            <li>
              <strong className="text-lg font-medium text-gray-900">Assess Your Goals:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Short-term goals: Choose micro pools for quick returns and lower investment amounts.</li>
                <li>Long-term wealth: Opt for macro or custom pools for sustained growth.</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Understand Risk Tolerance:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Low-risk pools: Established businesses with guaranteed returns.</li>
                <li>High-risk pools: Startups and innovative projects with higher ROI potential.</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Leverage AI Tools:</strong> 
              Infu’s AI-powered tools provide personalized suggestions based on your preferences and financial goals.
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Analyze Metrics:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>Funding goals</li>
                <li>Profit-sharing percentages</li>
                <li>Lock-in periods</li>
              </ul>
            </li>
            <li>
              <strong className="text-lg font-medium text-gray-900">Conclusion:</strong> Selecting the right pool involves understanding your goals, evaluating risk tolerance, and using Infu&apos;s tools to make informed decisions.
            </li>
          </ol>
        </div>

       
      </div>
    </main>
  );
}
