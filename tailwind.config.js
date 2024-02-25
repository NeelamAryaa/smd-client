// /** @type {import('tailwindcss').Config} */
// export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
// export const theme = {
//   theme: {
//     screen: {
//       xs: "10px",
//       sm: "620px",
//     },
//   },
//   extend: {},
// };
// export const plugins = [];

// tailwind.config.js

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "10px",
      sm: "620px",
    },
    extend: {},
  },
  plugins: [],
};
