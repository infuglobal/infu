// app/businesses/page.tsx
import { getAllBusinesses } from "@/lib/serveraction";
import React from "react";
import { FaBuilding, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default async function BusinessesPage() {
  // Fetch all businesses using the server action
  const businesses = await getAllBusinesses();

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
            <FaBuilding className="text-yellow-300" /> All Businesses
          </h1>
          <p className="text-lg">
            Manage and view all registered businesses in the system.
          </p>
        </div>

        {/* Top Section - Dashboard Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Total Businesses
            </h3>
            <p className="text-3xl font-bold text-blue-600">{businesses.length}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Verified Businesses
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {businesses.filter((business) => business.isGstVerified).length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Pending Verification
            </h3>
            <p className="text-3xl font-bold text-purple-600">
              {businesses.filter((business) => !business.isGstVerified).length}
            </p>
          </div>
        </div>

        {/* Business List Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
            <FaBuilding className="text-purple-600" /> Business Details
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {businesses.length > 0 ? (
              businesses.map((business) => (
                <div
                  key={business._id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Business Name */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Business Name
                      </h3>
                      <p className="text-gray-800">{business.businessName}</p>
                    </div>

                    {/* Category */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Category
                      </h3>
                      <p className="text-gray-800">{business.businessCategory}</p>
                    </div>

                    {/* Owner */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Owner
                      </h3>
                      <p className="text-gray-800">
                        {business.owner?.ownerName} ({business.owner?.mobileNumber})
                      </p>
                    </div>

                    {/* GST Verified */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        GST Verified
                      </h3>
                      <div className="flex items-center gap-2">
                        {business.isGstVerified ? (
                          <FaCheckCircle className="text-green-600" />
                        ) : (
                          <FaTimesCircle className="text-red-600" />
                        )}
                        <p className="text-gray-800">
                          {business.isGstVerified ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>

                    {/* PAN Number */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        PAN Number
                      </h3>
                      <p className="text-gray-800">{business.panNumber}</p>
                    </div>

                    {/* Registration Date */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Registration Date
                      </h3>
                      <p className="text-gray-800">
                        {new Date(business.registrationDate).toLocaleDateString()}
                      </p>
                    </div>

                    {/* Address */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-800">
                        {business.address
                          ? `${business.address.address}, ${business.address.city}, ${business.address.state} - ${business.address.pinCode}`
                          : "N/A"}
                      </p>
                    </div>

                    {/* GST Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        GST Details
                      </h3>
                      {business.gstData ? (
                        <div className="text-gray-800">
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
                        <p className="text-gray-800">N/A</p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-800">No businesses found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}