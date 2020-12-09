module.exports = {
	name: "childrenscolorado.org", // optional, falls back to object key
	description: "Children's Colorado",
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
		"https://www.childrenscolorado.org/",
		"https://www.childrenscolorado.org/conditions-and-advice/conditions-and-symptoms/conditions/coronavirus-in-children/",
		"https://www.childrenscolorado.org/surgery-little-things/",
//		"https://www.childrenscolorado.org/es/conditions-and-advice/conditions-and-symptoms/symptoms/excremento-color-inusual-del/",

	]
};