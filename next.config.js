/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // images: {
  //   domains: ["drive.google.com", ]
  // remotePatterns: [
  //   {
  //     protocol: 'https',
  //     hostname: 'drive.google.com',
  //    // port: '3000',
  //    // pathname: '/web/**',
  //   },
  // ],
  //}
};

module.exports = {
  generateEtags: false,
  ...nextConfig,
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    //formats: ["image/avif", "image/webp"],
    domains: [
      "firebasestorage.googleapis.com",
      "drive.google.com",
      "images.unsplash.com",
      "randomuser.me",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "firebasestorage.googleapis.com",
    //     pathname: "/image/upload/**"
    //   }
    // ]
  },
};
