"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function FundingStatusLoading() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-full">
      {/* Header Section Skeleton */}
      <div className="bg-gradient-to-r from-[#1E1E2E] to-[#312E81] rounded-lg p-8 text-white shadow-lg mb-8">
        <Skeleton className="h-8 w-1/3 mb-2" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      {/* Main Content Skeleton */}
      <main className="w-full mx-auto space-y-10">
        {/* Pool Thumbnail Skeleton */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <Skeleton className="w-full h-64 rounded-lg" />
        </div>

        {/* Pool Details Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-1/2" />
              </div>
              <Skeleton className="h-6 w-full" />
            </div>
          ))}
        </div>

        {/* Historical Performance Chart Skeleton */}
        <div className="mt-8">
          <Skeleton className="h-8 w-1/4 mb-4" />
          <Skeleton className="w-full h-64 rounded-lg" />
        </div>
      </main>
    </div>
  );
}