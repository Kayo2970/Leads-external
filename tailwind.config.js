/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#361B6A",
          "violet-soft": "#7A4DD2",
          "violet-light": "#9B6FE6",
          "violet-dark": "#140B29",
          "violet-surface": "#231245",
          gold: "#F55439",
          "gold-light": "#FF7E67",
          "gold-dark": "#A5346D",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "violet-gold": "linear-gradient(135deg, #361B6A 0%, #A5346D 50%, #F55439 100%)",
        "violet-card": "linear-gradient(180deg, rgba(54,27,106,0.08) 0%, rgba(54,27,106,0.02) 100%)",
        "gold-shimmer": "linear-gradient(90deg, #A5346D 0%, #F55439 50%, #A5346D 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
