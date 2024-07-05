/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    mytheme: {
      "primary": "#dbf1ff",
      "secondary": "#ffacff",
      "accent": "#43ffff",
      "neutral": "#f6ffff",
      "base-100": "#f8ffff",
      "info": "#41ffff",
      "success": "#9affdc",
      "warning": "#fff129",
      "error": "#ffbab9",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
