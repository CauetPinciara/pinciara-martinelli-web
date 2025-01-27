import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/servicos",
        destination: "/services",
      },
      {
        source: "/sobre-nos",
        destination: "/about",
      },
    ];
  },
};

export default nextConfig;
