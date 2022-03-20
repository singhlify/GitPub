module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: ["light", "dark"],
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
