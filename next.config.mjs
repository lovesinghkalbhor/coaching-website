/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure images for arvindkumarnitsurat.com
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arvindkumarnitsurat.com',

      },
    ],
  },
};

export default nextConfig;
