/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true, // Ensure preflight is enabled
  },
  theme: {
    extend: {
      fontFamily: {
        nexabold: ["Nexa-bold", "san-serif"],
        nexalight: ["Nexa-light", "san-serif"],
        nexaReg: ["Nexa-regular", "san-serif"],

        roboto: ["Roboto", "sans-serif"], // Add your Google Font here
      },
    },
  },
  plugins: [],
};
