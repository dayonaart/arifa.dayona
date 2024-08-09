import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./constant/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      small_mobile: "200px",
      mobile: "300px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      primary: "#18181b",
      lime: "#84cc16",
      lime_light: "#d9f99d",
      cyan: "#06b6d4",
      white: "#ffffff",
      amber: "#b45309",
      fuchsia: "#a21caf",
      black: "#0c0a09",
      teal: "#0ea5e9",
      teal_light: "#99f6e4",
    },
    textColor: {
      primary: "#18181b",
      white: "#ffffff",
      lime: "#84cc16",
      lime_light: "#d9f99d",
      cyan: "#06b6d4",
      amber: "#b45309",
      fuchsia: "#a21caf",
      black: "#0c0a09",
      teal: "#0ea5e9",
      teal_light: "#99f6e4",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-typewriter")({
      wordsets: {
        welcome: {
          words: [
            "Welcome!",
            "I am Arifa Dayona",
            "Mobile Engineer",
            "Front End Engineer",
          ],
          delay: 2,
          pauseBetween: 1,
          writeSpeed: 0.1,
        },
      },
    }),
  ],
} satisfies Config;

export default config;
