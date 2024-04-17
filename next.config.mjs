/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'utfs.io',
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: 'quickchart.io',
        pathname: "**",
      },
    ],
  },
  reactStrictMode: false,
  output: "standalone"
};

export default nextConfig;
