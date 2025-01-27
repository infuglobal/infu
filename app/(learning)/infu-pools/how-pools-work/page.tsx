export default function HowInfuPoolsWork() {
    return (
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">How Infu Pools Work</h1>
          </div>
  
          {/* Instructional Steps Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition mb-8">
            <ol className="list-decimal ml-6 space-y-4 text-sm text-gray-600">
              <li>
                <strong className="text-lg font-medium text-gray-900">Creation:</strong> 
                Pools are created by businesses or individuals registered on Infu, detailing their funding requirements and profit-sharing models.
              </li>
              <li>
                <strong className="text-lg font-medium text-gray-900">Participation:</strong> 
                Investors choose pools based on their preferences and contribute to secure a share of the returns.
              </li>
              <li>
                <strong className="text-lg font-medium text-gray-900">Fund Allocation:</strong> 
                Funds are disbursed securely via an escrow mechanism, ensuring transparency and trust.
              </li>
              <li>
                <strong className="text-lg font-medium text-gray-900">Returns Distribution:</strong> 
                Businesses share profits with investors at predefined intervals based on the pool&apos;s terms and performance.
              </li>
            </ol>
          </div>
  
      
        </div>
      </main>
    );
  }
  