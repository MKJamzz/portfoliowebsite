/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontSize: {
        base: "0.95rem",   // smaller default text
        lg: "1.1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.9rem",
        "4xl": "2.25rem",
      },
      colors: {
        primary: "#7c3aed",
        secondary: "#9333ea",
        dark: "#0f172a",
        muted: "#64748b",
        "background-alt": "#f8fafc",
      },
    },
  },
  plugins: [],
};
