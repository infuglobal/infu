"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { checkBusinessRegistration } from "@/lib/serveraction";
import { useUser } from "@clerk/nextjs";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaChartLine,
} from "react-icons/fa";
import Loading from "@/app/component/Loading";

// Define types
interface Business {
  businessName: string;
  businessCategory: string;
  description?: string[];
  registrationDate: string;
}

interface Address {
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

interface Owner {
  ownerName: string;
  mobileNumber: string;
  emailAddress?: string;
}

interface BusinessData {
  business: Business;
  address: Address;
  owner: Owner;
}

// ExpandableText Component
const ExpandableText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : `${text.slice(0, maxLength)}...`;
  return (
    <div>
      <p className="text-lg text-gray-700 font-medium">{displayText}</p>
      <button
        onClick={toggleExpand}
        className="text-purple-600 font-semibold mt-2 hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

const Profile = () => {
  const { user, isLoaded } = useUser();
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !user?.id) return;

    const fetchBusinessData = async () => {
      try {
        const data = await checkBusinessRegistration(user.id);
        if (data) {
          setBusinessData(data);
        } else {
          setError("No business data found.");
        }
      } catch (error) {
        console.error("Failed to fetch business data:", error);
        setError("Failed to fetch business data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, [user?.id, isLoaded]);

  if (loading || !isLoaded) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-gray-50 p-4">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white shadow-lg mb-2 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
            <FaBuilding className="text-yellow-300 " /> Business
            Registration
          </h1>
          <p className="text-lg text-purple-100">
            Register your business to start exploring new opportunities and
            funding options. Take the first step towards growth and success.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Error Message */}
          {error && (
            <div className="mb-2 text-center">
              <p className="text-red-600 text-lg font-semibold bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                {error}
              </p>
            </div>
          )}

          {/* Call-to-Action Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
              <FaChartLine className="text-purple-600 animate-pulse" /> Register
              Your Business
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Start your journey by registering your business and unlocking new
              opportunities for growth. Join a network of successful businesses
              today.
            </p>
            <Link
              href="/business-dashboard/register-business"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register Your Business
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Your <span className="text-yellow-300">Business </span>
        </h1>
        <p className="text-md">Empowering Your Growth with Infinity Fund</p>
      </div>

      {/* Business Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
          <FaBuilding className="text-purple-600" /> Business Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: "Business Name",
              value: businessData?.business.businessName || "N/A",
              icon: "🏢",
            },
            {
              label: "Business Category",
              value: businessData?.business.businessCategory || "N/A",
              icon: "📂",
            },
            {
              label: "Description",
              value: businessData?.business.description?.join(", ") || "N/A",
              icon: "📝",
              isLongText: true,
            },
            {
              label: "Registration Date",
              value: businessData?.business.registrationDate
                ? new Date(businessData.business.registrationDate).toLocaleDateString()
                : "N/A",
              icon: "📅",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-purple-700">
                  {item.label}
                </h3>
              </div>

              {item.isLongText ? (
                <ExpandableText text={item.value} maxLength={100} />
              ) : (
                <p className="text-lg text-gray-700 font-medium">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Business Address */}
      {businessData?.address && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mt-6">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-purple-600" /> Business Address
          </h2>
          <p className="text-lg text-gray-700">
            {businessData.address.address}
          </p>
          <p className="text-lg text-gray-700">
            {businessData.address.city}, {businessData.address.state} -{" "}
            {businessData.address.pinCode}
          </p>
        </div>
      )}

      {/* Owner Information */}
      {businessData?.owner && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mt-6">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <FaUser className="text-purple-600" /> Owner Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
                <FaUser /> Name
              </h3>
              <p className="text-lg text-gray-700">
                {businessData.owner.ownerName}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
                <FaPhone /> Phone
              </h3>
              <p className="text-lg text-gray-700">
                {businessData.owner.mobileNumber}
              </p>
            </div>
            {businessData.owner.emailAddress && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
                  <FaEnvelope /> Email
                </h3>
                <p className="text-lg text-gray-700">
                  {businessData.owner.emailAddress}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Register Business if Data is Missing */}
      {!businessData?.business && (
        <div className="text-center py-10">
          <p className="text-gray-700 mb-6">
            You haven&apos;t registered your business yet.
          </p>
          <Link
            href="/business-dashboard/register-business"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            Register Your Business
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;