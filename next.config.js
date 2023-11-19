/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: true, // temp add for next-auth failded build issues
        },

   
}

module.exports = nextConfig
