/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#042D60", // dark blue color
          2: "#181818", // gray text color
          3: "#0076D3", // sky color
          bg1: "#ffffff", // white color
          bg2: "#ecf4fc", // white blue
          bg3: "#F1F8FE",
          bg4: "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
};
