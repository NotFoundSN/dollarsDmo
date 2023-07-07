/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			purple: {
				DEFAULT: "#5F5DA6",
				op: "rgba(95, 93, 166, 0.8)",
				dark: "#4F4D8C",
				darkOp: "rgba(79, 77, 140, 0.85)",
				light: "#8F8EBF",
				lightOp: "rgba(143, 142, 191, 0.6)",
				blue: "#2E4159",
				blueOp: "rgba(46, 65, 89, 0.829)",
			},
			white: {
				DEFAULT: "#f8f8ff",
			},
			black: "#000000",
		},
		extend: {
			dropShadow: {
				sombra: "2rem 2rem 1rem #4444dd",
				text: "0.1rem 0.1rem 0.1rem #000000",
				button: "0.2rem 0.2rem 0.3rem #000000",
			},
		},
	},
	plugins: [],
};
