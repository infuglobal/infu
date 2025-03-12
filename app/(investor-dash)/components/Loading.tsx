"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-12 overflow-y-auto h-full">
      <div className="max-w-7xl mx-auto">
        {/* Header Section Skeleton */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white shadow-lg mb-8">
          <Skeleton className="h-10 w-1/2 mb-4" />
          <Skeleton className="h-6 w-3/4" />
        </div>

        {/* Trust and Safety Section Skeleton */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <Skeleton className="h-8 w-1/3 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="h-12 w-12 mx-auto mb-2 rounded-full" />
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid Skeleton */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column: Pool Details Skeleton */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            {/* Pool Thumbnail Skeleton */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
              <Skeleton className="h-8 w-1/3 mb-6" />
              <Skeleton className="w-full aspect-video rounded-lg" />
            </div>

            {/* Pool Information Skeleton */}
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
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>

            {/* Historical Performance Chart Skeleton */}
            <div className="mt-8">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="w-full h-64 rounded-lg" />
            </div>
          </div>

          {/* Right Column: Business Details Skeleton */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Skeleton className="h-8 w-1/3 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-6 w-1/2" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Section Skeleton */}
        <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8 shadow-md">
          <Skeleton className="h-8 w-1/3 mb-6" />
          <div className="space-y-6">
            {/* Unit Selection Skeleton */}
            <div>
              <Skeleton className="h-6 w-1/4 mb-4" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="h-12 w-full rounded-lg" />
                ))}
              </div>
            </div>

            {/* Quantity Selector Skeleton */}
            <div className="flex items-center gap-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <Skeleton className="h-6 w-1/4" />
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-10 w-10 rounded-lg" />
              </div>
            </div>

            {/* Investment Summary Skeleton */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <Skeleton className="h-6 w-1/4 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>

            {/* Confirm Investment Button Skeleton */}
            <div className="text-center">
              <Skeleton className="h-12 w-48 mx-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}