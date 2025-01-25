import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
