/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif']
			},
			transitionProperty: {
				width: 'width'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['emerald']
	}
};
