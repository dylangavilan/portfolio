module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nav: "Oswald",
        azeret: "Azeret Mono",
        maven: "Maven Pro",
      },
      color: {
        fondo: "#264653",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        fondo: "#293241",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        rosa: "#e5989b",
        clarito: "#faf9f9",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
