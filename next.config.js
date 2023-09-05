/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "svcy3.myclass.vn",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
