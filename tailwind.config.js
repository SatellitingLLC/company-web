/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          900: "#0a0e17",
          800: "#111827",
          700: "#1a2332",
          600: "#243044",
        },
        nebula: {
          cyan: "#06b6d4",
          teal: "#14b8a6",
          emerald: "#10b981",
          blue: "#3b82f6",
        },
        aurora: {
          green: "#22c55e",
          teal: "#2dd4bf",
          blue: "#38bdf8",
        },
      },
      backgroundImage: {
        "space-gradient":
          "linear-gradient(135deg, #0a0e17 0%, #1a2332 50%, #0f172a 100%)",
        "nebula-glow":
          "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
        "aurora-gradient":
          "linear-gradient(180deg, rgba(34, 197, 94, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(6, 182, 212, 0.3)",
        "glow-md": "0 0 30px rgba(6, 182, 212, 0.4)",
        "glow-lg": "0 0 60px rgba(6, 182, 212, 0.5)",
        aurora:
          "0 0 40px rgba(34, 197, 94, 0.3), 0 0 80px rgba(6, 182, 212, 0.2)",
      },
    },
  },
  plugins: [],
};
