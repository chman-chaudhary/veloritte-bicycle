/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oblivon: ["Oblivion"],
        redHat: ["Red Hat Display"],
      },
      keyframes: {
        rotate18: {
          "0%": { transform: "rotate(-18deg)", opacity: 0 },
          "100%": { transform: "rotate(0deg)", opacity: 1 },
        },
        loading: {
          "0%": { transform: "translateX(0)" }, // Cover fully covers the text
          "100%": { transform: "translateX(99%)" }, // Slower at the end
        },
      },
      animation: {
        rotate18: "rotate18 0.6s ease-out 0.3s forwards",
        loading: "loading 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
