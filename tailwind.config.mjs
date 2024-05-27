/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'n4xo-light': '#F0EDE7',
				'n4xo-beige': '#985f4f',
				'n4xo-beige-dark': '#c58978',
				'n4xo-brown': '#5E4C4A',
				'n4xo-brown-dark': '#896b68',
				'n4xo-dark': '#282828',
			},
			fontFamily: {
				sans: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				...defaultTheme.fontSize,
				'6.5xl': '4rem',
			},
			transitionProperty: {
				'color': 'color',
				'bg': 'background-color',
			},
		},
	},
	plugins: [],
}
