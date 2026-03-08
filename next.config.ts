import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ankerjapan.com",
        pathname: "/cdn/shop/**",
      },
    ],
  },
};

export default nextConfig;
