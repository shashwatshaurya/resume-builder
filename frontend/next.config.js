/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // CSS Modules configuration
  sassOptions: {
    includePaths: ["./src/styles"]
  }
  // Configure any additional Next.js settings here
};

module.exports = nextConfig;
