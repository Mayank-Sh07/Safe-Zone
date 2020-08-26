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
import FullScreenIcon from "@material-ui/icons/FullscreenSharp";
// Side-drawer along with Icon
import SideDrawer from "./SideDrawer";
import Logo from "./Logo";

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
}));

//Function to Hide the Navbar when Scrolled
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

// NAVBAR Function
export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.navContainer}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <div className={classes.brand}>
              <Logo
                height='50px'
                width='150px'
                color1={theme.palette.secondary.light}
                color2={theme.palette.primary.light}
                shadow={theme.palette.secondary.main}
              />
            </div>
            <IconButton>
              <FullScreenIcon />
            </IconButton>
            <SideDrawer />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
