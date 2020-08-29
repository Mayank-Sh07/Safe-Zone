import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import database from "./Firebase/firebaseConfig";
import { makeStyles, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import SafeMap from "./components/Map/SafeMap";
import Report from "./components/Report/Report";
import { data } from "./Data/data";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import { CustomThemeContext } from "./Themes/customThemeProvider";

// Styling classes used in the components
const useStyles = makeStyles((theme) => ({
  device: {
    flexGrow: 1,
    backgroundColor: theme.palette.background,
  },
  pageContainer: {
    padding: "0px",
  },
}));

export default function App() {
  // Holds the required Data
  const [fbData, setData] = useState(null);
  // Checks if Data is Loaded
  const [isLoaded, hasLoaded] = useState(false);
  // Retrieving User Location
  const { longitude, latitude, error } = usePosition(false, {
    enableHighAccuracy: true,
  });
  // Stores the Selected Zone
  const [selectedZone, setZone] = useState("TEYNAMPET(119)");
  //CSS classes
  const classes = useStyles();
  const { currentTheme, setTheme } = React.useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === "dark");

  //useEffect Hook to emulate ComponentWillMount()
  useEffect(() => {
    database
      .ref()
      .once("value")
      .then((ret) => {
        console.log(ret.val());
        setData(ret.val());
        hasLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        //set the fbData incase call to database fails
        setData(data);
      });
    console.log("Zone Data is set => RE-RENDER APP");
  }, []);

  const handleThemeChange = (event) => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  console.log(`App Rendered! has data loaded? : ${isLoaded}`);

  return (
    <div className={classes.device}>
      <Grid
        container
        direction='column'
        alignItems='stretch'
        justify='space-between'
      >
        <Grid item xs={12} sm={12} md={12} style={{}}>
          <Navbar handleThemeChange={handleThemeChange} />
        </Grid>
        <Grid container direction='row' justify='center'>
          {error === null ? (
            <Switch>
              <Route exact path='/map'>
                {isLoaded ? (
                  <SafeMap
                    data={fbData.chennai}
                    origin={{ lat: latitude, lng: longitude }}
                    setZone={setZone}
                    selectedZone={selectedZone}
                  />
                ) : (
                  <Loading message='Loading...' />
                )}
              </Route>
              <Route exact path='/report'>
                {isLoaded ? (
                  <Report
                    userLocation={{ lat: latitude, lng: longitude }}
                    data={fbData.chennai}
                    reportData={fbData.reportData}
                    setZone={setZone}
                    selectedZone={selectedZone}
                  />
                ) : (
                  <Loading message='Loading...' />
                )}
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          ) : (
            <Loading message={error} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
