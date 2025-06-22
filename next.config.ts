/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ⬅ static HTML + JS
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
