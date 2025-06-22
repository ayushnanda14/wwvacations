/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ⬅ static HTML + JS
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
