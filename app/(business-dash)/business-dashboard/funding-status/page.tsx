"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useUser } from "@clerk/nextjs";
import { fetchPoolDetailsByUserId } from "@/lib/serveraction";
import Image from "next/image";
import FundingStatusLoading from "../../components/FundingStatusLoading";

// Define the response type
interface PoolDetail {
  id: string;
  userId: string;
  amount: number;
  category: string;
  thumbnail: string;
  profitability: string;
  revenueModel: string;
  executionPlan: string;
  lockInPeriod: string;
  hashtags: string[];
  historicalPerformance?: { month: string; returns: number }[];
}

const ExpandableText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <p className="text-sm text-gray-700 font-medium">
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#312E81] font-semibold mt-2 hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default function FundingStatusPage() {
  const { user } = useUser();
  const [poolDetails, setPoolDetails] = useState<PoolDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!user?.id) return;
      try {
        const data = await fetchPoolDetailsByUserId(user.id);
        if (data) setPoolDetails(data);
      } catch (err) {
        console.error("Error fetching pool details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [user]);

  if (loading) return <FundingStatusLoading />;

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-6 md:p-8 text-white shadow-lg mb-8 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-1">
            Funding <span className="text-sky-300">Status</span>
          </h1>
          <p className="text-md mt-2">
            Manage your business details and explore funding opportunities.
          </p>
        </div>
      </div>
      
      <main className="w-full mx-auto  space-y-10">
        {poolDetails ? (
          <>
         <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                          {/* Pool Thumbnail */}
                          <div className="mb-8">
                            <Image
                              src={poolDetails.thumbnail}
                              alt="hgf"
                              width={800}
                              height={800}
                              className="rounded-lg object-cover w-full h-64"
                              priority
                            />
                          </div>
                          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {[
                "Amount Required",
                "Category",
                "Profitability",
                "Revenue Model",
                "Execution Plan",
                "Lock-In Period",
              ].map((label, index) => {
                const value = [
                  `₹${poolDetails.amount.toLocaleString()}`,
                  poolDetails.category,
                  `${poolDetails.profitability}%`,
                  poolDetails.revenueModel,
                  poolDetails.executionPlan,
                  poolDetails.lockInPeriod,
                ][index];
                const isLongText = [false, false, false, true, true, false][
                  index
                ];
                const icons = ["💰", "🏷️", "📈", "💼", "📅", "🔒"];
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl">{icons[index]}</span>
                      <h3 className="text-lg font-semibold text-[#312E81]">
                        {label}
                      </h3>
                    </div>
                    {isLongText ? (
                      <ExpandableText text={value} maxLength={100} />
                    ) : (
                      <p className="text-md text-gray-700 font-medium">
                        {value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {poolDetails.historicalPerformance && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#312E81] mb-4">
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
          </>
        ) : (
          <div className="text-center">
            <p className="text-gray-700">
              You haven&apos;t requested any pool yet.
            </p>
            <p className="text-gray-700">
              Make sure you have registered your business before requesting a
              pool.
            </p>
            <div className="mt-4">
              <a
                href="/business-dashboard/funding-status/create-pool"
                className="px-4 py-2 bg-[#312E81] text-white font-semibold rounded-md hover:bg-purple-700 transition"
              >
                Create Pool Now
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
