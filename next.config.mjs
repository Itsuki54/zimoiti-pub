/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@deck.gl-community/editable-layers'],
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
