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
      screens: {
        xs: "320px",    /* Pantallas muy pequeñas */
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", /* Pantallas muy grandes */
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#ff5ccf",
        "primary-hover": "#e040b8",
        secondary: "#fde8f8",
        "secondary-foreground": "#c026a0",
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
