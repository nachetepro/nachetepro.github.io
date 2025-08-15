import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "loveme.es",
      "www.dynamicgc.es",
      "www.bbva.com",
    ],
  },
};

export default nextConfig;
