import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages with @cloudflare/next-on-pages
  output: 'standalone',
};

export default nextConfig;