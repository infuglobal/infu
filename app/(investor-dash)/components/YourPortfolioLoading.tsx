"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function YourPortfolioLoading() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-full">
      {/* Header Section Skeleton */}
      <div className="bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-8 text-white shadow-md mb-8">
        <Skeleton className="h-8 w-1/3 mb-2" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      {/* Investor Details Section Skeleton */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <Skeleton className="h-8 w-1/4 mb-6" />
        <div className="space-y-6">
          {/* Personal Information Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>

          {/* Contact Information Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>

          {/* Address Section Skeleton */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-1/4" />
            </div>
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4" />
          </div>

          {/* Investment Details Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(1)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}