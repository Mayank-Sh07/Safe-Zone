import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fafafa", //black -> buttons, loading-logo, logos
      light: "#ff5722", //light green -> waves, home bg, side-drawer and its logo shadow,
    },
    secondary: {
      main: "#c30000", // Footer, cards, loading liquid, instructions
      light: "#ffb74d", // home logo , bubble color, report sheet bg
      dark: "#424242", // Navbar
    },
    background: "#272727", //background
  },
});

theme = responsiveFontSizes(theme);

export default theme;
