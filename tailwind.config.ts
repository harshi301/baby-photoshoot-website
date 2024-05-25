import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: "#E6E6FA",
          light: "#F3E8FF",
        },
        "mint-green": {
          DEFAULT: "#98FF98",
          dark: "#3EB489",
        },
        charcoal: {
          DEFAULT: "#36454F",
          light: "#4F5B66",
        },
        "soft-pink": "#FFD1DC",
        "soft-yellow": "#FFFACD",
        white: "#FFFFFF",
        "light-gray": "#D3D3D3",
      },
    },
  },
  plugins: [],
};
export default config;
