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
} from "@material-ui/core";
import uuid from "react-uuid";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmailSharp";
import MapIcon from "@material-ui/icons/MapSharp";
import SubjectIcon from "@material-ui/icons/SubjectSharp";
import Github from "@material-ui/icons/GitHub";
import MenuOpenSharp from "@material-ui/icons/MenuOpenSharp";

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
    background: theme.palette.secondary.light,
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
        <ListItem key={uuid()} className={classes.brand}>
          Safezone
        </ListItem>
        <Divider key={uuid()} />
        {[
          { text: "Map", icon: <MapIcon /> },
          { text: "Report", icon: <SubjectIcon /> },
          { text: "Github", icon: <Github /> },
          { text: "About", icon: <AlternateEmailIcon /> },
        ].map((item) => (
          <>
            <ListItem key={uuid()} button={true}>
              <ListItemIcon key={uuid()}>{item.icon}</ListItemIcon>
              <ListItemText key={uuid()} primary={item.text} />
            </ListItem>
            <Divider key={uuid()} />
          </>
        ))}
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
