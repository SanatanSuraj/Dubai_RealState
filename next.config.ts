import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['dubai-real-state.vercel.app'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true // Only use during development
  }
};

export default nextConfig;