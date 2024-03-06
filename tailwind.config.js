/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	safelist: [
		"bg-beach",
		"from-beach-200",
		"to-beach-400",
		"from-desert-200",
		"to-desert-400",
		"from-snow-200",
		"to-snow-400",
		"from-beach-600",
		"to-beach-800",
		"from-desert-600",
		"to-desert-800",
		"from-snow-600",
		"to-snow-800",
		"bg-desert",
		"shadow-beach/50",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Fredoka"],
			},
			colors: {
				snow: {
					200: "#f7f7f5",
					400: "#d8d7d0",
					600: "#b0b0a3",
					800: "#6e6e64",
				},

				desert: {
					50: "#f9f5f1",
					100: "#efe1d6",
					200: "#ddc1aa",
					300: "#cc9e7d",
					400: "#be815c",
					500: "#b4694c",
					600: "#9f5240",
					700: "#853f38",
					800: "#6d3533",
					900: "#5b2d2c",
					950: "#331615",
				},
				beach: {
					50: "#f0fbfb",
					100: "#d9f4f4",
					200: "#b7e8ea",
					300: "#86d7da",
					400: "#5fc4c9",
					500: "#31a1a9",
					600: "#2c838e",
					700: "#296a75",
					800: "#295861",
					900: "#264b53",
					950: "#153137",
				},
			},
		},
	},
	plugins: [],
};
