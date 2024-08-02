/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "s1.abcstatics.com" },
      { hostname: "cdn-icons-png.freepik.com" },
    ],
  },
};

export default nextConfig;
