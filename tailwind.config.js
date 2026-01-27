export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d0f14",
        surface: "#141824",
        neon: "#22f7dd",
        accent: "#7c7cff",
        muted: "#a1a1aa"
      },
      boxShadow: {
        neon: "0 0 20px rgba(34,247,221,0.5)"
      }
    }
  },
  plugins: []
}
