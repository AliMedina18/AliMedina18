import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#7c3aed",
        "primary-hover": "#6d28d9",
        secondary: "#ede9fe",
        "secondary-foreground": "#5b21b6",
        foreground: "#09090b",
        "muted-foreground": "#71717a",
        border: "#e4e4e7",
        muted: "#f4f4f5",
      },
      backgroundImage: {
        "grid-white": "linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)",
        "grid-dark": "linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)",
      },
    },
  },
  plugins: [],
};

export default config;
