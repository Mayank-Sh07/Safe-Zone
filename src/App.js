import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import database from "./Firebase/firebaseConfig";
import { makeStyles, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import SafeMap from "./components/Map/SafeMap";
import { data } from "./Data/data";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

// Styling classes used in the components
const useStyles = makeStyles((theme) => ({
  device: {
    flexGrow: 1,
  },
  pageContainer: {
    padding: "0px",
  },
}));

export default function App() {
  // Holds the required Data
  const [zoneData, setZoneData] = useState(null);
  // Checks if Data is Loaded
  const [isLoaded, hasLoaded] = useState(false);
  // Retrieving User Location
  const { longitude, latitude, accuracy, error } = usePosition();
  //CSS classes
  const classes = useStyles();

  //useEffect Hook to emulate ComponentWillMount()
  useEffect(() => {
    // database
    //   .ref()
    //   .once("value")
    //   .then((ret) => {
    //     setZoneData(ret.val());
    //     hasLoaded(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //set the ZoneData
    setZoneData(data);
    console.log("Zone Data is set => RE-RENDER APP");
    const timer = setTimeout(() => {
      hasLoaded(true);
      console.log("ALL DATA SET");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
          <Navbar />
        </Grid>
        <Grid container direction='row' justify='center'>
          <Switch>
            <Route path='/map'>
              {isLoaded ? (
                <SafeMap
                  data={zoneData}
                  origin={{ lat: latitude, lng: longitude }}
                />
              ) : (
                <h3>Loading</h3>
              )}
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}
