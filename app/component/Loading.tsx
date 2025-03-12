'use client';

export default function Loading() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-700 mx-auto"></div>

        {/* Loading Text */}
        <h1 className="mt-6 text-2xl font-bold text-white">
          Loading...
        </h1>
        <p className="m-2 text-lg text-purple-700">
          Please wait while we prepare your content.
        </p>
      </div>
    </div>
  );
}