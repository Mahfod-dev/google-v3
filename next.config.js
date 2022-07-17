/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['upload.wikimedia.org', 'www.grapheine.com'],
	},
};

module.exports = nextConfig;
