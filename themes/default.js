const light = {
	colors: {
		bg: {
			body: "#ffffff",
			card: "#ffffff",
			card_section: "#EDF7FA",
			button: "#009b9b",
			chip: "#21243D",
			nav: "#009b9b",
			switch_track: "#aab4be",
			switch_thumb: "#0080ff",
		},
		text: {
			global: "#21243D",
			switch_icon: "#ffffff",
			nav: "#21243D",
			intro: "#21243D",
			post: "#21243D",
			project: "#21243D",
			project_secondary: "8695A4",
			footer: "#21243D",
			link: "#00A8CC",
			button: "#ffffff",
			chip: "#ffffff",
		},
		border: "#E0E0E0",
	},
};

const dark = {
	colors: {
		bg: {
			body: "#022C43",
			card: "#115173",
			card_section: "#053F5E",
			button: "#FFD700",
			chip: "#ffffff",
			nav: "#FFD700",
			switch_track: "#aab4be",
			switch_thumb: "#0080ff",
		},
		text: {
			global: "#ffffff",
			switch_icon: "#ffffff",
			nav: "#ffffff",
			nav_link: "#022C43",
			intro: "#ffffff",
			post: "#ffffff",
			project: "#ffffff",
			project_secondary: "#8695A4",
			footer: "#ffffff",
			link: "#00A8CC",
			button: "#000000",
			chip: "#022C43",
		},
		border: "#E0E0E0",
	},
};

const defaultTheme = {
	fonts: {
		main: "Heebo, sans-serif",
	},
	breakpoints: {
		sm: "only screen and (min-width: 576px)",
		md: "only screen and (min-width: 767px)",
		lg: "only screen and (min-width: 992px)",
		xl: "only screen and (min-width: 1200px)",
	},
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
