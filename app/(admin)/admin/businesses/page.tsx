import { getAllBusinesses } from '@/lib/serveraction';
import React from 'react';

const BusinessesPage = async () => {
  // Fetch all businesses using the server action
  const businesses = await getAllBusinesses();

  return (
    <div className="w-full h-screen pb-10 overflow-y-auto">
      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Top Section - Dashboard Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Businesses</h3>
              <p className="text-3xl font-bold text-blue-600">{businesses.length}</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Verified Businesses</h3>
              <p className="text-3xl font-bold text-green-600">
                {businesses.filter((business) => business.isGstVerified).length}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Verification</h3>
              <p className="text-3xl font-bold text-purple-600">
                {businesses.filter((business) => !business.isGstVerified).length}
              </p>
            </div>
          </div>

          {/* Business List Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">All Businesses</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th className="py-3 px-4">Business Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Owner</th>
                  <th className="py-3 px-4">GST Verified</th>
                  <th className="py-3 px-4">PAN Number</th>
                  <th className="py-3 px-4">Registration Date</th>
                  <th className="py-3 px-4">Address</th>
                  <th className="py-3 px-4">GST Details</th>
                </tr>
              </thead>
              <tbody>
                {businesses.length > 0 ? (
                  businesses.map((business) => (
                    <tr key={business._id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{business.businessName}</td>
                      <td className="py-3 px-4">{business.businessCategory}</td>
                      <td className="py-3 px-4">
                        {business.owner?.ownerName} ({business.owner?.mobileNumber})
                      </td>
                      <td className="py-3 px-4">
                        {business.isGstVerified ? 'Yes' : 'No'}
                      </td>
                      <td className="py-3 px-4">{business.panNumber}</td>
                      <td className="py-3 px-4">
                        {new Date(business.registrationDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        {business.address
                          ? `${business.address.address}, ${business.address.city}, ${business.address.state} - ${business.address.pinCode}`
                          : 'N/A'}
                      </td>
                      <td className="py-3 px-4">
                        {business.gstData ? (
                          <div>
                            <p>
                              <strong>GST Number:</strong> {business.gstData.gstNumber}
                            </p>
                            <p>
                              <strong>Legal Name:</strong> {business.gstData.legalName}
                            </p>
                            <p>
                              <strong>Status:</strong> {business.gstData.gstinStatus}
                            </p>
                          </div>
                        ) : (
                          'N/A'
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="py-3 px-4 text-center text-sm text-gray-500">
                      No businesses found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessesPage;