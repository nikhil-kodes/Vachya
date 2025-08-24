module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				vachya: ["Mozilla Headline", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
