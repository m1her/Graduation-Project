/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = {
  generateEtags: false,
  ...nextConfig,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "drive.google.com",
      "images.unsplash.com",
      "randomuser.me",
    ],
  },
  future: { webpack5: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.resolve.alias.canvas = false
      config.resolve.alias.encoding = false
      return config
  }
};
