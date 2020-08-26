import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5BE7C4",
    },
    secondary: {
      main: "#9C27B0",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
