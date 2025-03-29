import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}'",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#eff7ff",
          "100": "#deedff",
          "200": "#b6dcff",
          "300": "#76c1ff",
          "400": "#2da2ff", // Default Color
          "500": "#0286f5",
          "600": "#0068d2",
          "700": "#0053aa",
          "800": "#004c97",
          "900": "#073b73",
          "950": "#04254d",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
