/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      screens: {
        mdd: "991px",
        'landscape': {'raw': '(orientation: landscape) and (max-height: 600px)'},
      },
    },
  },
  plugins: [],
};
