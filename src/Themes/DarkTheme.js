import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#414141",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

// #5BE7C4
