const withMDX = require("@next/mdx")({
	extension: /\.mdx$/,
});

/** @type {import("next").NextConfig} */
const nextConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "mdx"],
};

module.exports = withMDX(nextConfig);
