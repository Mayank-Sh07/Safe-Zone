import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b9f6ca",
      light: "#08ffc8",
      dark: "#525252",
    },
    secondary: {
      main: "#80deea",
      light: "#e5ffff",
      dark: "#81b9bf",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

// #5BE7C4
