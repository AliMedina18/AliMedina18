import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better dev warnings
  reactStrictMode: true,

  // Image optimization
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  // Compress output
  compress: true,

  // PoweredByHeader off for security
  poweredByHeader: false,

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
