module.exports = {
	name: "calamos.com", // optional, falls back to object key
	description: "Calamos",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.calamos.com/",
		"https://wm.calamos.com/",
		"https://www.calamos.com/blogs/voices/investing-through-uncertainty-perspectives-from-the-calamos-investment-team/",
		"https://www.calamos.com/funds/mutual/evolving-world-growth-cnwix/",
		"https://www.calamos.com/funds/closed-end/convertible-high-income-chy/",
		"https://www.calamos.com/about/news/",
		"https://www.calamos.com/funds/closed-end/",
		"https://www.calamos.com/resources/tax-center/"
	]
};