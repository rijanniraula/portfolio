import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    EMAIL: process.env.EMAIL,
    PASS: process.env.PASS,
  },
};

export default nextConfig;
