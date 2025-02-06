// app/admin/investors/page.tsx
import { fetchAllInvestors } from "@/lib/serveraction";
import React from "react";
import Image from "next/image";

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
  investmentAmount: number;
  riskPreference: "Low" | "Medium" | "High";
  investmentTypes: string[];
  kycStatus: {
    pan: string;
    aadhaar: string;
    passport?: string;
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
  const investors: Investor[] = await fetchAllInvestors(); // Fetch investors using the server action

  console.log("Investors:", investors); // Debugging: Log the fetched investors

  return (
    <div className="w-full h-screen pb-10 overflow-y-auto">
      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Top Section - Dashboard Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Total Investors Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Total Investors
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                {investors.length}
              </p>
            </div>

            {/* Additional Boxes (if needed) */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Total Investments
              </h3>
              <p className="text-3xl font-bold text-green-600">
                ₹{investors.reduce((sum, investor) => sum + investor.investmentAmount, 0).toLocaleString()}
              </p>
            </div>

            {/* Placeholder Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Active Investors
              </h3>
              <p className="text-3xl font-bold text-purple-600">
                {investors.filter((investor) => investor.accreditedInvestor).length}
              </p>
            </div>
          </div>

          {/* Bottom Section - Investors Table */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">
              All Investors
            </h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th className="py-3 px-4">Profile</th>
                  <th className="py-3 px-4">Full Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone Number</th>
                  <th className="py-3 px-4">Investment Amount</th>
                  <th className="py-3 px-4">Risk Preference</th>
                  <th className="py-3 px-4">User Role</th>
                  <th className="py-3 px-4">Created At</th>
                </tr>
              </thead>
              <tbody>
                {investors.length > 0 ? (
                  investors.map((investor) => (
                    <tr key={investor._id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <Image
                          height={40}
                          width={40}
                          src="/infu-logo.png" // Replace with actual image URL if available
                          alt="Investor Avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      </td>
                      <td className="py-3 px-4">{investor.fullName}</td>
                      <td className="py-3 px-4">{investor.email}</td>
                      <td className="py-3 px-4">{investor.phoneNumber}</td>
                      <td className="py-3 px-4">
                        ₹{investor.investmentAmount.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">{investor.riskPreference}</td>
                      <td className="py-3 px-4">{investor.userRole}</td>
                      <td className="py-3 px-4">
                        {new Date(investor.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="py-3 px-4 text-center text-sm text-gray-500">
                      No investors found.
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

export default InvestorsPage;