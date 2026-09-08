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
          violet: "#361C6A",
          purple: "#361C6A",
          "violet-soft": "#7A4DD2",
          "violet-light": "#9B6FE6",
          "violet-dark": "#241147",
          "violet-surface": "#2A1454",
          magenta: "#9C1256",
          coral: "#DE3F11",
          gold: "#DE3F11",
          "gold-light": "#FF5E2E",
          "gold-dark": "#9C1256",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #9C1256 0%, #DE3F11 100%)",
        "violet-gold": "linear-gradient(135deg, #361C6A 0%, #9C1256 50%, #DE3F11 100%)",
        "violet-card": "linear-gradient(180deg, rgba(54,28,106,0.9) 0%, rgba(36,17,71,0.9) 100%)",
        "gold-shimmer": "linear-gradient(90deg, #9C1256 0%, #DE3F11 50%, #9C1256 100%)",
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
