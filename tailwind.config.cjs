/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#18181b",
        secondary: "#f0380f",
        primaryBg: "#FFFFFF",
        secondaryBg: "#e5e5e5",
      },
      spacing: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
