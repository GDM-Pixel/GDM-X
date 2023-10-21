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
			dustyred:{
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
			xs: ["14px", "20px"],
			sm: ["15px", "22px"],
			base: ["16px", "24px"],
			md: ["18px", "26px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
			xxl: ["30px", "40px"],
			xxxl: ["36px", "48px"],
			jumbo: ["60px", "80px"],
		},
		container: {
			center: true,
			padding: "2rem",
		},

	},
	plugins: [],
}
