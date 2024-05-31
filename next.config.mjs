/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pangrango",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
