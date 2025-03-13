import React from "react";
import { fetchFeedbacks } from "@/lib/serveraction";
import { FaUser, FaClock } from "react-icons/fa";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Define Feedback interface
interface Feedback {
  _id: string;
  userId: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

// Helper function to calculate relative time (e.g., "2 days ago")
const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
};

export default async function FeedbackPage() {
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

  // Fetch feedbacks using the server action
  const feedbacks = await fetchFeedbacks();

  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}

        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-6 md:p-8 text-white shadow-lg mb-8 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-1">
              User <span className="text-sky-300">Feedbacks</span>
            </h1>
            <p className="text-md mt-2">
              Insights and suggestions from our users to help us improve.
            </p>
          </div>
        </div>
        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback: Feedback) => (
            <div
              key={feedback._id}
              className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Feedback Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 sm:p-3 bg-purple-50 rounded-full">
                  <FaUser className="text-purple-600 text-lg sm:text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold text-purple-900 truncate">
                    {feedback.subject}
                  </h2>
                  <p className="text-sm text-purple-600 truncate">
                    From: {feedback.name} ({feedback.email})
                  </p>
                </div>
              </div>

              {/* Feedback Message */}
              <div className="mt-4">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed break-words">
                  {feedback.message}
                </p>
              </div>

              {/* Feedback Footer */}
              <div className="mt-6 flex items-center gap-4 text-sm text-purple-500">
                <FaClock className="text-purple-500" />
                <span>{getRelativeTime(new Date(feedback.createdAt))}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
