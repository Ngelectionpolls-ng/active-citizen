import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",

      },
       {
        protocol: "https",
        hostname: "picsum.photos",

      },
      {
        protocol: 'https',
        hostname: 'randomuser.me'
      }
    ],
  },
   typescript: {
   
    ignoreBuildErrors: true,
  },
};

export default nextConfig;