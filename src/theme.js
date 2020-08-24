import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5BE7C4",
    },
    secondary: {
      main: "#39BAE8",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
