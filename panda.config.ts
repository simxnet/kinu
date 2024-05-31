import { defineConfig } from "@pandacss/dev";
import { getColors } from "theme-colors";

const primaryColors = getColors("#1ba169");

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					primary: Object.entries(primaryColors).reduce(
						// biome-ignore lint/suspicious/noExplicitAny: bro
						(acc: any, [key, value]) => {
							acc[key] = { value };
							return acc;
						},
						{},
					),
				},
			},
		},
	},

	// Global css
	globalCss: {
		extend: {
			body: {
				bg: "stone.950",
				color: "stone.50",
			},
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",
	jsxFramework: "react",
});
