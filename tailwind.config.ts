import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#2A4451',
        customGray: '#9EAAB5',
      },
      fontFamily: {
        'candara': ['Candara Light', 'sans-serif'],
        'Sans':['Arial', 'Helvetica', 'sans-serif '],
      },
    },
  },
  plugins: [],
};
export default config;
