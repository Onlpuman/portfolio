/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		deviceSizes: [260, 320, 390, 412, 600, 640, 750, 828, 1080, 1200, 1280, 1440, 1600, 1920, 2048, 3840],
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = nextConfig;