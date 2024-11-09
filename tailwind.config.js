/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        11: "4rem",
      },
    },
  },
  plugins: [],
};
