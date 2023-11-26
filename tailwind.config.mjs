/** @type {import('tailwindcss').Config} */




export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				"1/2": "50%",
			},
			borderRadius: {
				xl: "1rem",
			},
			
		},
		screens: {
			xs: "320px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1400px"
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			powder: "#fafffd",
			prussian: {
				100: "#445474",
				200: "#3C4A67",
				300: "#35415A",
				400: "#273043",
				500: "#262E40",
				600: "#1E2533",
				700: "#171C27",
			},
			dustyred: {
				100: "#E6607B",
				200: "#E34F6C",
				300: "#E13D5E",
				400: "#D62246",
				500: "#D42145",
				600: "#C21E3F",
				700: "#B01C39",
				800: "#9F1934",
			},
			moonstone: {
				100: "#1FE5FF",
				200: "#0AE2FF",
				300: "#00D8F5",
				400: "#00C6E0",
				500: "#00B2CB",
				600: "#00A2B8",
				700: "#0090A3",
				800: "#007E8F",
			},
			raisinblack: "#232634",
			error: "#898989",
			lightgrey: "#D1D1D1",
		},
		fontFamily: {
			sans: ["Open Sans, Arial"],
			serif: ["Times New Roman"],
		},
		fontSize: {
			xs: ["0.875rem", "1.25rem"],
			sm: ["0.9375rem", "1.375rem"],
			base: ["1rem", "1.5rem"],
			md: ["1.125rem", "1.625rem"],
			lg: ["1.25rem", "1.75rem"], 
			xl: ["1.5rem", "2rem"], 
			xxl: ["1.875rem", "2.5rem"], 
			xxxl: ["2.25rem", "3rem"], 
			xxxxl: ["2.5rem", "3.125rem"],
			jumbo: ["3.75rem", "5rem"],
		},
		container: {
			center: true,
			padding: "2rem",
		},

	},
	plugins: [require("@tailwindcss/typography"),
		function ({ addBase, theme }) {
			addBase({
				'h1': {
					color: theme('colors.prussian.400'),
					fontSize: theme('fontSize.xxxxl'),
					fontWeight: theme('fontWeight.bold'),
				},
				'h2': {
					color: theme('colors.prussian.400'),
					fontSize: theme('fontSize.xxxl'),
					fontWeight: theme('fontWeight.bold'),
				},
				'h3': {
					color: theme('colors.prussian.400'),
					fontSize: theme('fontSize.xxl'),
					fontWeight: theme('fontWeight.bold'),
				},
				'h4': {
					color: theme('colors.prussian.400'),
					fontSize: theme('fontSize.xl'),
					fontWeight: theme('fontWeight.bold'),
				},
				'h5': {
					color: theme('colors.prussian.400'),
					fontSize: theme('fontSize.lg'),
					fontWeight: theme('fontWeight.bold'),
				},
				'h6': {
					color: theme('colors.prussian.400'),
					fontSize: theme('fontSize.base'),
					fontWeight: theme('fontWeight.bold'),
				},
			});
		},
	],
}

