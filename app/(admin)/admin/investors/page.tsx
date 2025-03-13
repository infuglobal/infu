// app/admin/investors/page.tsx
import { fetchAllInvestors } from "@/lib/serveraction";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { FaUser, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Define the Investor type based on the schema
interface Investor {
  _id: string;
  fullName: string;
  dob: Date;
  address: string;
  pincode: string;
  city: string;
  state: string;
  email: string;
  phoneNumber: string;
  riskPreference: "Low" | "Medium" | "High";
  investmentTypes: string[];
  kycStatus: {
    pan: string;
    aadhaar: string;
  };
  accreditedInvestor: boolean;
  userRole: "Retail Investor" | "Institutional Investor" | "HNI";
  country: string;
  taxResidency: string;
  bankAccountDetails: {
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
  createdAt: Date;
}

const InvestorsPage = async () => {
  const user = await currentUser();

  const ADMIN_EMAIL_1 = process.env.ADMIN_1_EMAIL;
  const ADMIN_EMAIL_2 = process.env.ADMIN_2_EMAIL;
  const ADMIN_EMAIL_3 = process.env.ADMIN_3_EMAIL;

  // Redirect if the user is not an admin
  if (
    !user ||
    !user.emailAddresses.some(
      (email) =>
        email.emailAddress === ADMIN_EMAIL_1 ||
        email.emailAddress === ADMIN_EMAIL_2 ||
        email.emailAddress === ADMIN_EMAIL_3
    )
  ) {
    redirect("/");
  }
  const investors: Investor[] = await fetchAllInvestors(); // Fetch investors using the server action

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}

        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-6 md:p-8 text-white shadow-lg mb-8 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-1">
              All <span className="text-sky-300">Investors</span>
            </h1>
            <p className="text-md mt-2">
              Manage and view all registered investors in the system.
            </p>
          </div>
        </div>

        {/* Top Section - Dashboard Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Total Investors
            </h3>

            <p className="text-3xl font-bold text-blue-600">
              {investors.length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Total Investments
            </h3>
            <p className="text-3xl font-bold text-green-600">0</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Active Investors
            </h3>
            <p className="text-3xl font-bold text-purple-600">
              {
                investors.filter((investor) => investor.accreditedInvestor)
                  .length
              }
            </p>
          </div>
        </div>

        {/* Investors List Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
            <FaUser className="text-purple-600" /> Investor Details
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {investors.length > 0 ? (
              investors.map((investor) => (
                <div
                  key={investor._id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Full Name */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Full Name
                      </h3>
                      <p className="text-gray-800">{investor.fullName}</p>
                    </div>

                    {/* Email */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-800">{investor.email}</p>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Phone Number
                      </h3>
                      <p className="text-gray-800">{investor.phoneNumber}</p>
                    </div>

                    {/* Investment Amount */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Investment Amount
                      </h3>
                    </div>

                    {/* Risk Preference */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Risk Preference
                      </h3>
                      <p className="text-gray-800">{investor.riskPreference}</p>
                    </div>

                    {/* User Role */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        User Role
                      </h3>
                      <p className="text-gray-800">{investor.userRole}</p>
                    </div>

                    {/* Created At */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Created At
                      </h3>
                      <p className="text-gray-800">
                        {new Date(investor.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    {/* Accredited Investor */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-2">
                        Accredited Investor
                      </h3>
                      <div className="flex items-center gap-2">
                        {investor.accreditedInvestor ? (
                          <FaCheckCircle className="text-green-600" />
                        ) : (
                          <FaTimesCircle className="text-red-600" />
                        )}
                        <p className="text-gray-800">
                          {investor.accreditedInvestor ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-800">
                No investors found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsPage;
