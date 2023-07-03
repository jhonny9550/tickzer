/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			fontFamily: {
				sans: ['Avalon', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['emerald']
	}
};
