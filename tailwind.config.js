/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}", // ← app directory 구조 쓸 경우
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
