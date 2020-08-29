import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import Flask from "./LoadFlask";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  display: {
    backgroundColor: theme.palette.background,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 5vmin)",
    color: theme.palette.primary.main,
  },
  loadIcon: {
    height: "40vmin",
    pointerEvents: "none",
  },
}));

const Loading = ({ message }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.container}>
      <header className={classes.display}>
        <Flask
          className={classes.loadIcon}
          flaskColor={theme.palette.primary.main}
          bubbleColor={theme.palette.secondary.light}
          liquidColor={theme.palette.secondary.main}
        />
        {message !== "Loading..." ? (
          <p>Kindly Enable Location Services and Reload</p>
        ) : (
          <p>{message}</p>
        )}
      </header>
    </div>
  );
};

export default Loading;
