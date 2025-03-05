"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { checkInvestorRegistration } from "@/lib/serveraction";
import { useUser } from "@clerk/nextjs";
import { FaBuilding, FaUser } from "react-icons/fa";
import Loading from "@/app/component/Loading";

// Define investor data type
interface InvestorData {
  fullName: string;
  dob: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  riskPreference: string;
}

const InvestorPortfolio = () => {
  const { user, isLoaded } = useUser();
  const [investorData, setInvestorData] = useState<InvestorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !user?.id) return;

    const fetchInvestorData = async () => {
      try {
        const data = await checkInvestorRegistration(user.id);
        if (data) {
          setInvestorData(data);
        } else {
          setError("Investor data not found.");
        }
      } catch (err) {
        setError("Failed to fetch investor data.");
        console.error("Error fetching investor data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestorData();
  }, [user?.id, isLoaded]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gray-50 p-4">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white shadow-lg mb-8">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <FaBuilding className="text-yellow-300" /> Investor Portfolio
            </h1>
            <p className="text-lg">
              Manage and create your investor portfolio to explore new
              opportunities.
            </p>
          </div>
        </div>

        <div className="text-center">
            <p className="text-gray-700">
              You haven&apos;t registered your portfolio yet.
            </p>
            
            <div className="mt-4">
              <Link
                href="/investor-dashboard/portfolio/register-portfolio"
                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
              >
                Create your Portfolio Now
              </Link>
            </div>
          </div>

    
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white shadow-md mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Your <span className="text-yellow-300">Investor Portfolio</span>
        </h1>
        <p className="text-md">Empowering Your Growth with Infinity Fund</p>
      </div>

      {/* Investor Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
          <FaUser className="text-purple-600" /> Investor Details
        </h2>
        {investorData ? (
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Full Name",
                  value: investorData.fullName,
                  icon: "👤",
                },
                {
                  label: "Date of Birth",
                  value: new Date(investorData.dob).toLocaleDateString(),
                  icon: "🎂",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-purple-700">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Email",
                  value: investorData.email,
                  icon: "📧",
                },
                {
                  label: "Phone Number",
                  value: investorData.phoneNumber,
                  icon: "📞",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-purple-700">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏠</span>
                <h3 className="text-xl font-semibold text-purple-700">
                  Address
                </h3>
              </div>
              <p className="text-lg text-gray-700">{investorData.address}</p>
              <p className="text-lg text-gray-700">
                {investorData.city}, {investorData.state} -{" "}
                {investorData.pincode}
              </p>
            </div>

            {/* Investment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Risk Preference",
                  value: investorData.riskPreference,
                  icon: "🛡️",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-purple-700">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-700">
              You haven&apos;t created your investor portfolio yet.
            </p>
            <p className="text-gray-700">
              Start building your investment portfolio today and unlock new
              opportunities for growth.
            </p>
            <div className="mt-4">
              <Link
                href="/investor-dashboard/portfolio/register-portfolio"
                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
              >
                Create Investor Portfolio
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorPortfolio;
