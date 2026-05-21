import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/james-khele-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
