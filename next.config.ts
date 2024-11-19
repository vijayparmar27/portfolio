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
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
