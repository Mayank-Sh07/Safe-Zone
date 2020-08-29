import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
  Divider,
  useTheme,
} from "@material-ui/core";
import uuid from "react-uuid";
import HomeIcon from "@material-ui/icons/HomeSharp";
import MapIcon from "@material-ui/icons/MapSharp";
import SubjectIcon from "@material-ui/icons/SubjectSharp";
import Github from "@material-ui/icons/GitHub";
import MenuOpenSharp from "@material-ui/icons/MenuOpenSharp";
import Logo from "../Home/Logo";

// Style Classes Used for the Components
const useStyles = makeStyles((theme) => ({
  drawerClose: {
    transform: "scaleX(1)",
  },
  drawerOpen: {
    transform: "scaleX(-1)",
  },
  drawerWidth: {
    width: 200,
  },
  drawerStyles: {
    background: theme.palette.primary.light,
  },
  brand: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: "25px",
    marginBottom: "6px",
  },
}));

// SIDEDRAWER Function
export default function SideDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  // Stores the State and Anchor for the Drawer
  const [state, setState] = React.useState({ left: false });
  // Function to Toggle the Drawer
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ [anchor]: open });
  };
  // List of all the Drawer Items
  const list = () => (
    <div key={uuid()} className={classes.drawerWidth}>
      <List>
        <br />
        <ListItem key={uuid()} className={classes.brand}>
          <Logo
            height='50px'
            width='150px'
            color1={theme.palette.primary.main}
            color2={theme.palette.primary.main}
            shadow={theme.palette.primary.light}
            id1='sidebar-abc'
            id2='sidebar-xyz'
          />
        </ListItem>
        <br />
        <Divider key={uuid()} />
        <br />
        {[
          { text: "Map", icon: <MapIcon />, href: "map" },
          { text: "Report", icon: <SubjectIcon />, href: "report" },
          { text: "Home", icon: <HomeIcon />, href: "/" },
        ].map((item) => (
          <>
            <a
              href={item.href}
              style={{ textDecoration: "none", color: "black" }}
              key={uuid()}
            >
              <ListItem key={uuid()} button={true}>
                <ListItemIcon key={uuid()}>{item.icon}</ListItemIcon>
                <ListItemText key={uuid()} primary={item.text} />
              </ListItem>
            </a>
            <br />
            <Divider key={uuid()} />
            <br />
          </>
        ))}
        <a
          href='https://github.com/Mayank-Sh07/ideacon'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: "none", color: "black" }}
          key={uuid()}
        >
          <ListItem key={uuid()} button={true}>
            <ListItemIcon key={uuid()}>
              <Github />
            </ListItemIcon>
            <ListItemText key={uuid()} primary={"Github"} />
          </ListItem>
        </a>
        <br />
        <Divider key={uuid()} />
      </List>
    </div>
  );

  return (
    <React.Fragment key={uuid()}>
      <IconButton
        key={uuid()}
        onClick={toggleDrawer("left", true)}
        className={classes.appBarOption}
      >
        <MenuOpenSharp
          key={uuid()}
          className={clsx(
            !state.left && classes.drawerOpen,
            state.left && classes.drawerClose
          )}
        />
      </IconButton>
      <Drawer
        key={uuid()}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        classes={{ paper: classes.drawerStyles }}
      >
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
