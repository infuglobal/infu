"use client";

import { useEffect, useState } from "react";
import { checkBusinessRegistration } from "@/lib/serveraction";
import { useUser } from "@clerk/nextjs";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import VideoUploadModal from "../components/VideoUploadModal";
import Loading from "../components/Loading";
import EditProfileModal from "../components/EditProfileModal";

// Define types
interface Business {
  businessName: string;
  businessCategory: string;
  description?: string[];
  registrationDate: string;
  businessPitchVideo?: string; // Add this field
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
      <p className="text-md text-gray-700 font-medium">{displayText}</p>
      <button
        onClick={toggleExpand}
        className="text-purple-600 font-semibold mt-2 hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show more"}
      </button>
    </div>
  );
};

const Profile = () => {
  const { user, isLoaded } = useUser();
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  
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
      <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
       
        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-6 md:p-8 text-white shadow-lg mb-8 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-1">
            Register <span className="text-sky-300">Business</span>
          </h1>
          <p className="text-md mt-2">
          Take the first step towards growth! Register your business to unlock
          exclusive funding opportunities and manage your details seamlessly.{" "}          </p>
        </div>
      </div>

        {/* Main Content */}
        <div className="text-center">
          <p className="text-gray-700">
            It looks like you haven&apos;t registered your business yet.
          </p>
          <p className="text-gray-700">
            Register now to access tailored funding options and streamline your
            business operations.
          </p>
          <div className="mt-4">
            <a
              href="/business-dashboard/register-business"
              className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
            >
              Register Your Business Today
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-6 md:p-8 text-white shadow-lg mb-8 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-1">
            Your <span className="text-sky-300">Business</span>
          </h1>
          <p className="text-md mt-2">
            Empowering Your Growth with Infinity Fund
          </p>
        </div>

        {/* Edit Profile Button */}
        <button
          className="flex items-center justify-center gap-2 px-5 py-2 h-10 min-w-[120px] bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 w-full md:w-auto"
          onClick={() => setIsEditProfileModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <span className="text-sm font-semibold">Profile</span>
        </button>
      </div>
      {/* Edit Profile Modal */}
      {businessData && (
        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          onClose={() => setIsEditProfileModalOpen(false)}
          userId={user?.id || ""} // Pass the user ID
          existingData={{
            businessName: businessData.business.businessName,
            description: businessData.business.description || [],
            businessPitchVideo: businessData.business.businessPitchVideo || "",
          }}
        />
      )}
      {/* Video Section */}
      {businessData?.business.businessPitchVideo ? (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            Your Pitch Video
          </h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <video
              src={businessData.business.businessPitchVideo}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            Upload Your Pitch Video
          </h2>
          <p className="text-gray-700 mb-6">
            A well-crafted pitch video can significantly increase your chances
            of securing investments. Upload your video to showcase your
            business.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            Upload Video
          </button>
        </div>
      )}

      {/* Video Upload Modal */}
      <VideoUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

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
                ? new Date(
                    businessData.business.registrationDate
                  ).toLocaleDateString()
                : "N/A",
              icon: "📅",
            },
          ].map((item, index) => (
            <div
              key={index}
              className=" border border-gray-200 rounded-lg p-4 shadow-sm  transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-md font-semibold text-purple-700">
                  {item.label}
                </h3>
              </div>

              {item.isLongText ? (
                <ExpandableText text={item.value} maxLength={100} />
              ) : (
                <p className="text-md text-gray-700 font-medium">
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
          <p className="text-md text-gray-700">
            {businessData.address.address}
          </p>
          <p className="text-md text-gray-700">
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
              <h3 className="text-md font-semibold text-purple-700 flex items-center gap-2">
                <FaUser /> Name
              </h3>
              <p className="text-md text-gray-700">
                {businessData.owner.ownerName}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-md font-semibold text-purple-700 flex items-center gap-2">
                <FaPhone /> Phone
              </h3>
              <p className="text-md text-gray-700">
                {businessData.owner.mobileNumber}
              </p>
            </div>
            {businessData.owner.emailAddress && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="text-md font-semibold text-purple-700 flex items-center gap-2 flex-wrap">
                  <FaEnvelope className="flex-shrink-0" />
                  <span className="break-words">Email</span>
                </div>
                <p className="text-md text-gray-700 break-words overflow-hidden">
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
          <a
            href="/business-dashboard/register-business"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            Register Your Business
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;
