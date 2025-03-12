"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ExploreLoading() {
  return (
    <div className="container h-full">
      {/* 🔍 Search Input Skeleton */}
      <div className="flex flex-col md:flex-row mx-2 justify-between items-center mb-6">
        <Skeleton className="h-8 w-1/3 mb-4 sm:mb-0" />
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border w-full sm:w-96">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      </div>

      {/* 🏷️ Category Buttons Skeleton */}
      <div className="flex gap-3 mb-6">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-10 w-20 rounded-lg" />
        ))}
      </div>

      {/* 🏢 Business Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <Skeleton className="w-full h-40" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}