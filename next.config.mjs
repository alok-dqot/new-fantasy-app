/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
      domains: [
        "api.sportswiz.live",
        "images.entitysport.com",
        "sportswiz-images.s3.ap-south-1.amazonaws.com",
      ],
    },
  }


export default nextConfig;
