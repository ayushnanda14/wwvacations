/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ⬅ static HTML + JS
  reactStrictMode: true,
  images: {
    unoptimized: true,
    quality: 70,
  },
};

export default nextConfig;
