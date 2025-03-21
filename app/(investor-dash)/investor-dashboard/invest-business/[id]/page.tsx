"use client";

import { useState, useEffect } from "react";
import { fetchPoolDetails } from "@/lib/serveraction";
import { useParams, useRouter } from "next/navigation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // For charts
import {
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
  FaBuilding,
} from "react-icons/fa"; // Icons for trust elements
import VideoPlayer from "@/app/(investor-dash)/components/VideoPlayer";
import Loading from "@/app/(investor-dash)/components/Loading";

// Define the response type
interface PoolDetails {
  id: string;
  userId: string;
  businessId: {
    id: string;
    businessName: string;
    businessCategory: string;
    description: string[];
    registrationDate: Date;
    isGstVerified: boolean;
    panNumber: string;
    businessPitchVideo: string;
  };
  amount: number;
  category: string;
  thumbnail: string;
  profitability: string;
  revenueModel: string;
  executionPlan: string;
  lockInPeriod: string;
  hashtags: string[];
  historicalPerformance?: { month: string; returns: number }[]; // Added for chart data
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
      <p className="text-sm text-gray-700 font-medium">{displayText}</p>
      <button
        onClick={toggleExpand}
        className="text-purple-600 font-semibold mt-2 hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default function PoolDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [poolDetails, setPoolDetails] = useState<PoolDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<number>(100); // Default unit
  const [quantity, setQuantity] = useState<number>(1); // Default quantity

  // Available investment units
  const units = [100, 1000, 5000, 10000, 100000];

  // Increase quantity
  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  // Decrease quantity (minimum 1)
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  useEffect(() => {
    if (!id) return;

    const fetchDetails = async () => {
      try {
        const data = await fetchPoolDetails(id);
        if (!data) {
          setError(true);
          router.push("/404");
        } else {
          setPoolDetails(data);
        }
      } catch (err) {
        console.error("Error fetching pool details:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, router]);

  if (loading) {
    return <Loading />;
  }

  if (error || !poolDetails) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-red-600">
        Pool not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}

        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-6 md:p-8 text-white shadow-lg mb-8 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-1">
              Invest in{" "}
              <span className="text-sky-300">
                {poolDetails.businessId.businessName}
              </span>
            </h1>
            <p className="text-md mt-2">
              A high-growth opportunity with proven returns and a secure
              investment model.{" "}
            </p>
          </div>
        </div>

        {/* Trust and Safety Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <FaShieldAlt className="text-purple-600" /> Why Invest with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <FaChartLine className="text-4xl text-purple-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold">Proven Track Record</h3>
              <p className="text-gray-600">
                Consistent returns over the past 5 years.
              </p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-purple-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold">Secure Investments</h3>
              <p className="text-gray-600">
                GST and PAN verified for transparency.
              </p>
            </div>
            <div className="text-center">
              <FaHandshake className="text-4xl text-purple-600 mx-auto mb-2" />
              <h3 className="text-xl font-semibold">Trusted Partners</h3>
              <p className="text-gray-600">Backed by industry leaders.</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column: Pool Details */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            {/* Pool Thumbnail */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <VideoPlayer
                  videoSrc={poolDetails.businessId.businessPitchVideo}
                  thumbnail={poolDetails.thumbnail}
                />
              </div>
            </div>

            {/* Pool Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  label: "Amount Required",
                  value: `₹${poolDetails.amount.toLocaleString()}`,
                  icon: "💰",
                },
                { label: "Category", value: poolDetails.category, icon: "🏷️" },
                {
                  label: "Profitability",
                  value: ` ${poolDetails.profitability} %`,
                  icon: "📈",
                },
                {
                  label: "Revenue Model",
                  value: poolDetails.revenueModel,
                  icon: "💼",
                  isLongText: true,
                },
                {
                  label: "Execution Plan",
                  value: poolDetails.executionPlan,
                  icon: "📅",
                  isLongText: true,
                },
                {
                  label: "Lock-In Period",
                  value: poolDetails.lockInPeriod,
                  icon: "🔒",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-md">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-purple-700">
                      {item.label}
                    </h3>
                  </div>

                  {/* Conditionally render dropdown for long text */}
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

            {/* Historical Performance Chart */}
            {poolDetails.historicalPerformance && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  Historical Performance
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={poolDetails.historicalPerformance}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="returns" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* Right Column: Business Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
              <FaBuilding className="text-purple-600" /> Business Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Business Name",
                  value: poolDetails.businessId.businessName,
                  icon: "🏢",
                },
                {
                  label: "Business Category",
                  value: poolDetails.businessId.businessCategory,
                  icon: "📂",
                },
                {
                  label: "Description",
                  value: poolDetails.businessId.description.join(", "),
                  icon: "📝",
                  isLongText: true,
                },
                {
                  label: "Registration Date",
                  value: new Date(
                    poolDetails.businessId.registrationDate
                  ).toLocaleDateString(),
                  icon: "📅",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-md">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-purple-700">
                      {item.label}
                    </h3>
                  </div>

                  {/* Conditionally render dropdown for long text */}
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
        </div>

        <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8 shadow-md">
          {/* Title */}
          <h2 className="text-xl font-bold text-black mb-6">
            Make an Investment
          </h2>

          <div className="space-y-6">
            {/* Unit Selection */}
            <div>
              <h3 className="text-md font-semibold text-purple-700 mb-4">
                Select Units to Invest
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {units.map((unit, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedUnit(unit);
                      setQuantity(1); // Reset quantity when unit changes
                    }}
                    className={`px-6 py-3 rounded-lg text-md font-semibold transition duration-300 ${
                      selectedUnit === unit
                        ? "bg-purple-600 text-white scale-105 shadow-md"
                        : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                    }`}
                  >
                    {unit === 100000 ? "1L" : `₹${unit.toLocaleString()}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-700">
                Select Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={decrementQuantity}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-lg font-bold hover:bg-gray-400 transition duration-300"
                >
                  −
                </button>
                <span className="text-lg font-bold text-black">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-lg font-bold hover:bg-purple-700 transition duration-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Investment Summary */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-4">
                Investment Summary
              </h3>
              <div className="space-y-3 text-md text-gray-700">
                <p>
                  Selected Unit:{" "}
                  <span className="font-bold">
                    {selectedUnit === 100000
                      ? "1L"
                      : `₹${selectedUnit.toLocaleString()}`}
                  </span>
                </p>
                <p>
                  Number of Units: <span className="font-bold">{quantity}</span>
                </p>
                <p>
                  Total Cost:{" "}
                  <span className="font-bold text-purple-600">
                    ₹{(selectedUnit * quantity).toLocaleString()}
                  </span>
                </p>
              </div>
            </div>

            {/* Confirm Investment Button */}
            <div className="text-center">
              <button
                disabled={!selectedUnit}
                className={`px-12 py-2 rounded-lg text-lg font-semibold transition duration-300 shadow-lg ${
                  selectedUnit
                    ? "bg-purple-600 hover:bg-purple-700 transform hover:scale-105 text-white"
                    : "bg-gray-400 cursor-not-allowed text-white"
                }`}
              >
                Confirm Investment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
