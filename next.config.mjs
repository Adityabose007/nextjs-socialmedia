/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  // for external images
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com",
        
      }
    ]
  }
};

export default nextConfig;