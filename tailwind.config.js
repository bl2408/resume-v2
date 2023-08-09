/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				encodeSans: ["Encode Sans", "sans-serif"],
			},
			screens: {
				"2xs": "360px",
				xs: "475px",
				sm2: "550px",
				md2: "960px",
			},
		},
	},
	plugins: [],
};
