/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "632px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    // fontSize: {
    //   xs: rem(0.75),
    //   sm: rem(0.875),
    //   base: rem(0.9375),
    //   lg: rem(1.125),
    //   xl: rem(1.25),
    //   "2xl": rem(1.5),
    //   "3xl": rem(1.875),
    //   "4xl": rem(2.25),
    //   "5xl": rem(3),
    //   "6xl": rem(4),
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
