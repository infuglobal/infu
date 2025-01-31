'use client';



import Link from 'next/link';

const InvestorDashboard = () => {
  

  return (
    <div className=" h-screen pb-10 overflow-y-auto">
      

      {/* Main Content */}
      <main className="flex-1  bg-white ">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Requests</h3>
              <p className="text-sm text-gray-600 mb-4">
                Submit your business idea, funding amount, and PAN/registration details to get started.
              </p>
              <Link href="/investor-dashboard/register-portfolio" className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
                Register your Portfolio
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Insights</h3>
              <p className="text-sm text-gray-600 mb-4">
                Based on your sales reports and customer feedback, here are some growth strategies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li>Expand your marketing efforts in the first quarter.</li>
                <li>Focus on customer retention through loyalty programs.</li>
                <li>Invest in product development for enhanced customer satisfaction.</li>
              </ul>
            </div>
          </div>

       

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Status</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-green-600">Total Contributions</h4>
                  <p className="text-xl font-bold text-green-800">Rs 50,000</p>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-orange-600">Fund Disbursed</h4>
                  <p className="text-xl font-bold text-orange-800">Rs 30,000</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback Section</h3>
              <p className="text-sm text-gray-600 mb-4">
                Receive insights or recommendations from investors to improve your business strategy.
              </p>
              <textarea
                placeholder="Write your feedback request here..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-sm text-gray-700 focus:outline-none focus:ring focus:ring-purple-200"
              ></textarea>
              <button className="bg-purple-600 text-white py-2 px-6 mt-4 rounded-lg hover:bg-purple-700 transition duration-300">
                Send Feedback Request
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestorDashboard;