/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily ignore linting during builds for faster iteration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optimize images for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 2592000, // 30 days cache for optimized images
  },

  // Enable compression
  compress: true,
  
  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // No source maps in production for smaller builds
  productionBrowserSourceMaps: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'motion/react', 'lucide-react', '@tabler/icons-react', 'react-icons'],
  },

  // Reduce powered-by header for slightly smaller responses
  poweredByHeader: false,
}

export default nextConfig
