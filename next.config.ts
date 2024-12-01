import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "fastly.picsum.photos",
      "raw.githubusercontent.com",
      "mozilla.github.io",
      "morth.nic.in",
      "cors-anywhere.herokuapp.com",
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  output: "export",
  exportPathMap: async function (defaultPathMap) {
    delete defaultPathMap["/api"]; // Remove /api from the static export
    return defaultPathMap;
  },
};

export default nextConfig;
