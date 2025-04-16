/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/yamzoning',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
