/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  exportTrailingSlash: true,
  swcMinify: true,
    images: {
      unoptimized: true,
    },
  devIndicators: {
    buildActivity: false
  }
};

export default nextConfig;
