/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBG: "#fbfcf8",
        brownColor: "#2F2504",
        greyColor: "#A5AE9E",
      },
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
