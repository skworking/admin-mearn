/** @type {import('next').NextConfig} */
const nextConfig = {
    // serverActions:{
    //     bodySizeLimit:'10mb'
    // }
    async rewrites() {
        return [
          {
            source: '/uploads/:path*',
            destination: '/public/uploads/:path*',
          },
        ];
      },
};

export default nextConfig;
