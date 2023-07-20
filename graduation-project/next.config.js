/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['drive.google.com', 'images.unsplash.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'drive.google.com',
    //    // port: '3000',
    //    // pathname: '/web/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
