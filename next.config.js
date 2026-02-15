/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mark LanceDB as external to avoid bundling native modules
  experimental: {
    serverComponentsExternalPackages: ['@lancedb/lancedb'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Handle native modules
      config.externals = [...(config.externals || []), '@lancedb/lancedb']
    }
    return config
  },
}

module.exports = nextConfig
