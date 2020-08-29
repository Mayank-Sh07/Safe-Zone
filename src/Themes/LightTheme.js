import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#121212", //black -> buttons, loading-logo, logos
      light: "#86ffc7", //light green -> waves, home bg, side-drawer and its logo shadow,
    },
    secondary: {
      main: "#fff591", // Footer, cards, loading liquid, instructions
      light: "#fffac9", // home logo , bubble color, report sheet bg
      dark: "#fff16b", // Navbar
    },
    background: "#FFFBD0", //background
  },
});

theme = responsiveFontSizes(theme);

export default theme;
