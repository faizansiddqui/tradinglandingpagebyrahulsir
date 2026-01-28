/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed: Static export doesn't support API routes
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
