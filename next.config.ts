import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb", // Increase the body size limit for Server Actions
    },
  },
  images: {
    domains: ["res.cloudinary.com", "img.clerk.com"], // Allowed image domains
  },
};

export default nextConfig;