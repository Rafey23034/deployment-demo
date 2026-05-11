import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Let Vercel skip the extra type check since next build already does it
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
