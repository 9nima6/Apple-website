/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {},
    colors: {
      bgMenu: "var(--bgMenu)",
      bgSubMenu: "var(--bgSubMenu)",
      test: "var(--test)",
      menuText: "var(--menuText)",
      black: "var(--black)",
      white: "var(--white)",
      headlinewhite: "var(--headlinewhite)",
      headlineblack: "var(--headlineblack)",
      bluelink: "var(--bluelink)",
      sliderbut: "var(--sliderbut)",
      buthov: "var(--buthov)",
      footertext: "var(--footertext)",
      footerborder: "var(--footerborder)",
      footernavtitle: "var(--footernavtitle)",
    },
    fontFamily: {
      bold: "bold",
      semiBold: "semiBold",
      regular: "regular",
    },
  },
  plugins: [],
};
