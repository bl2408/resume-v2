/** @type {import('tailwindcss').Config} */
const defaultTheme = import("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			"2xs": "360px",
			xs: "475px",
			sm2: "550px",
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				encodeSans: ["Encode Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
