import React from "react";
import {
  makeStyles,
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
} from "@material-ui/core";
import BrightnessIcon from "@material-ui/icons/Brightness7Rounded";
// Side-drawer along with Icon
import SideDrawer from "./SideDrawer";
import Logo from "../Home/Logo";

// Style Classes Used for the Components
const useStyles = makeStyles((theme) => ({
  brand: {
    flex: 1,
    marginLeft: 10,
  },
  navContainer: {
    display: "flex",
    minHeight: "84px",
  },
  appbar: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

//Function to Hide the Navbar when Scrolled
function HideOnScroll(props) {
  const { children } = props;
  const theme = useTheme();
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

// NAVBAR Function
export default function Navbar({ handleThemeChange }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.navContainer}>
      <HideOnScroll>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <div className={classes.brand}>
              <Logo
                height='50px'
                width='150px'
                color1={theme.palette.primary.black}
                color2={theme.palette.secondary.black}
                shadow={theme.palette.primary.main}
                id1='navbar-abc'
                id2='navbar-xyz'
              />
            </div>
            <IconButton onClick={handleThemeChange}>
              <BrightnessIcon />
            </IconButton>
            <SideDrawer />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
