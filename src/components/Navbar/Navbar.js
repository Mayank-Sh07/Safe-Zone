import React from "react";
import {
  makeStyles,
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import FullScreenIcon from "@material-ui/icons/FullscreenSharp";
// Side-drawer along with Icon
import SideDrawer from "./SideDrawer";

// Style Classes Used for the Components
const useStyles = makeStyles((theme) => ({
  brand: {
    flex: 1,
    marginLeft: 20,
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
  return (
    <div className={classes.navContainer}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography className={classes.brand}>SafeZone</Typography>
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
