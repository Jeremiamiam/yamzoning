/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/yamzoning' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
