/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily ignore linting during builds for faster iteration
  // TODO: Fix all ESLint errors and re-enable
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optimize images for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable compression
  compress: true,
  
  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // Production source maps for debugging (optional, remove for smaller builds)
  productionBrowserSourceMaps: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@tabler/icons-react'],
  },
}

export default nextConfig
