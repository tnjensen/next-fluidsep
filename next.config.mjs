/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'fluidsep.tnjensen.com',
              port: '',
              pathname: '/wp-content/uploads/**',
            },
          ],
        },
        eslint: {
          // Warning: This allows production builds to successfully complete even if
          // your project has ESLint errors.
          ignoreDuringBuilds: true,
        },
        trailingSlash: true,
      };

export default nextConfig;
