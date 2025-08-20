import type { NextConfig } from "next";
import { hostname } from "os";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["sites.tridiondemo.com"]
  },
  devIndicators:{
    position:"bottom-right"
  }
};

export default nextConfig;
