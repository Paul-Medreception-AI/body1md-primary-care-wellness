/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "#0B2D64", dark: "#06142C", light: "#E4F4FC", ink: "#06152E", cream: "#F7F8F5", muted: "#55606F", border: "#D5E6F1", teal: "#1AA7E3", accent: "#E76F25" },
      fontFamily: { cormorant: ["var(--font-cormorant)", "Georgia", "serif"], sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
module.exports = config;