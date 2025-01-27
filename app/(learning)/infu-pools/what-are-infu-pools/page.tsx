export default function WhatAreInfuPools() {
    return (
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">What Are Infu Pools?</h1>
          </div>
  
          {/* Description Section */}
          <p className="text-gray-700 mb-6">
            Infu pools are collective investment opportunities that bring together contributions from multiple investors to fund projects, businesses, or initiatives. Each pool is designed to:
          </p>
  
          {/* Features List */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li><strong className="text-purple-600">Democratize Investment:</strong> Allow individuals to invest with amounts starting as low as ₹1.</li>
              <li><strong className="text-purple-600">Reduce Risk:</strong> Spread investment across multiple contributors, lowering individual risk.</li>
              <li><strong className="text-purple-600">Maximize Returns:</strong> Provide access to opportunities that may not be available to individual investors.</li>
            </ul>
          </div>
  
          {/* Empowerment Statement */}
          <p className="text-gray-700 mb-6">
            Infu pools empower everyone to participate in investment opportunities, no matter the size of their contributions.
          </p>
  
          {/* Call to Action */}
          <p className="text-purple-500 font-semibold">
            Ready to start investing? <a href="/infu-pools" className="underline hover:text-purple-800">Explore Infu Pools</a> today!
          </p>
        </div>
      </main>
    );
  }
  