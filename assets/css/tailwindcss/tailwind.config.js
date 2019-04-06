module.exports = {
	theme: {
		extend: {
			colors: {
				"primary-color": {
					darkest: "#360311",
					darker: "#6D0522",
					dark: "#A30832",
					default: "#B50938",
					light: "#CB5374",
					lighter: "#E19DAF",
					lightest: "#F8E6EB"
				}
			},
			fontFamily: {
				"brand-heavy": [
					"FranklinGothicLTPro-Heavy",
					"FranklinGothicLTPro-Dm",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					'"Noto Sans"',
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				],
				brand: [
					"FranklinGothicLTPro-Dm",
					"FranklinGothicLTPro-Heavy",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					'"Noto Sans"',
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				]
			}
		}
	},
	variants: {
		// Some useful comment
	},
	plugins: [		
		require("tailwindcss-aspect-ratio")({
			ratios: {
				square: [1, 1],
				"16/9": [16, 9]
			}
		}),
		require("tailwindcss-flexbox-order")([0, 1, 2], ["responsive"]),
		require("./plugins/css-grid.js")({
			grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 24],
			gaps: {
				"0": "0",
				"4": "1rem",
				"8": "2rem",
				"16": "4rem"
			}
		})
	]
};
