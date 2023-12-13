/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	important: true,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
			},
		},
		extend: {
			colors: {
			  blue: {
				75: '#2563eb',
			  },
			}
		  },
	  
	},
	plugins: [require('@tailwindcss/typography')],
};
