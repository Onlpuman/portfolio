/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		deviceSizes: [600, 640, 750, 828, 1080, 1200, 1366, 1440, 1536, 1600, 1920, 2048, 3840],
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = nextConfig;