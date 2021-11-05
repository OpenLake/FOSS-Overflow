/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	mode: 'jit',
	important: true,
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
