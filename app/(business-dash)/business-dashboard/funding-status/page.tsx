import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen w-full bg-white text-gray-800 overflow-y-auto">
      {/* Page Header */}
      <header className="bg-gray-100 border-b border-gray-200 py-6 px-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">Funding status</h1>
        <p className="text-sm text-gray-600">
          Manage your business details and explore funding opportunities.
        </p>
      </header>

      {/* Content Section */}
      <main className="w-full mx-auto px-6 py-10 space-y-10">
        {/* Business Details Section */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold mb-4">Funding Details</h3>
         
          <p className="text-gray-700 text-center">You haven&apos;t reuested any pool yet.</p>
          <p className="text-gray-700 text-center">Make sure you have registered your business before requesting a pool</p>


            <div className="text-center  mt-4">
              <Link
              href="/business-dashboard/funding-status/create-pool"
                className=" px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
              >
                Create Pool Now
              </Link>
            </div>
          
        </section>
      </main>
    </div>
  )
}

export default page
