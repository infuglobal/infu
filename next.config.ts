import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Important for Clerk with Next.js 15
  },
  images: {
    domains: ["res.cloudinary.com","img.clerk.com"],
  },
};

export default nextConfig;
