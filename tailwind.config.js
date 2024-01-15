/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB6D20",
        secondary: "#EB8426",
        "text-color": "#3E3E3E",
        subtext: "#9A9A9A",
        paragraph: "#292929",
        success: "#6DB95A",
        error: "#DD5E5E",
        warning: "#D89614",
        url: "#177DDC",
        white: "#FFFFFF",
        light: "#D6D6D6",
        medium: "#5F5F5F",
        regular: "#303030",
        "gray-background": "#F5F6F8",
        "base-border": "#E9E9E9",
        black: "#000",
      },
    },
  },
  plugins: [],
};
