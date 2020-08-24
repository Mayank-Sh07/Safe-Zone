/*global google*/
import React from "react";
import uuid from "react-uuid";
import {
  // makeStyles,
  Grid,
  Select,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Button,
  ButtonGroup,
} from "@material-ui/core";
// Places Search-Bar import
import Search from "./Search";
// Google Map import
import Map from "./Map";

var directionsService; // will be assigned google's DirectionsService()

// Style Classes Used for the Components
// const useStyles = makeStyles((theme) => ({}));

export default function SafeMap({ data, origin }) {
  // Array containing all Zone Names
  const zoneNames = data.map((zone) => zone.properties.zname);
  // Stores the Selected Zone
  const [selectedZone, setZone] = React.useState("TEYNAMPET(119)");
  // Toggle Cluster View
  const [showAllClusters, allClustersVisible] = React.useState(false);
  // Stores User Origin, Destination, Waypoints and Toggles Reset Origin
  const [route, setRoute] = React.useState({
    origin: origin,
    destination: null,
    waypoints: [],
    resetOriginView: false,
    addWaypointsView: false,
    directions: null,
  });

  // Emulates ComponentDidMount for SafeMap
  React.useEffect(() => {
    directionsService = new google.maps.DirectionsService();
    console.log("SAFEMAP CDM => DirectionsService LOADED");
  }, []);

  // Function to get the Directions
  // **CHANGES STATE**
  function getDirections() {
    if (route.destination !== null) {
      directionsService.route(
        {
          origin: route.origin,
          destination: route.destination,
          travelMode: google.maps.TravelMode.DRIVING,
          waypoints: route.waypoints,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            console.log("Status OK");
            setRoute((prevState) => ({ ...prevState, directions: result }));
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }

  // Function to drop the Route
  // **CHANGES STATE**
  function dropRoute() {
    console.log("dropRoute() is called => RE-RENDER");
    setRoute((prevState) => ({
      ...prevState,
      destination: null,
      directions: null,
      addWaypointsView: false,
    }));
  }

  // Function to change Zone the Route
  //**CHANGES STATE**
  function changeZone(event, zname) {
    console.log("changeZone() is called => RE-RENDER");
    if (zname === undefined) {
      setZone(event.target.value);
    } else {
      setZone(zname);
    }
  }

  // Function to Toggle the Cluster View
  // **CHANGES STATE**
  function toggleClusterView() {
    console.log("toggleClusterView() is called => RE-RENDER");
    allClustersVisible(!showAllClusters);
  }

  // Function to Toggle the Add Waypoints View
  // **CHANGES STATE**
  function toggleAddWaypointsView() {
    console.log("addWaypointsView() is called => RE-RENDER");
    setRoute((prevState) => ({
      ...prevState,
      addWaypointsView: !route.addWaypointsView,
    }));
  }

  // Function to Toggle the ResetOrigin View
  // **CHANGES STATE**
  function toggleResetOriginView() {
    console.log("toggleResetOriginView() is called => RE-RENDER");
    setRoute((prevState) => ({
      ...prevState,
      resetOriginView: !route.resetOriginView,
      directions: null,
      destination: null,
      waypoints: [],
    }));
  }

  function undoWaypoint() {
    console.log("undoWaypoint() is called => RE-RENDER");
    setRoute((prevState) => ({
      ...prevState,
      waypoints: [
        ...prevState.waypoints.splice(0, prevState.waypoints.length - 1),
      ],
      directions: null,
    }));
  }

  // Object containing all properties to be passed to Map
  const mapProps = {
    data: data,
    selectedZone: selectedZone,
    showAllClusters: showAllClusters,
    route: route,
    controllers: {
      setRoute: setRoute,
      changeZone: changeZone,
      getDirections: getDirections,
    },
  };

  console.log(`RENDERED SafeMap Rendered with ROUTE as : ${route}`);

  console.log(route);

  return (
    <>
      {!route.addWaypointsView && (
        <Grid item xs={12} sm={6} md={6}>
          <Search setRoute={setRoute} resetOriginView={route.resetOriginView} />
        </Grid>
      )}
      {!route.resetOriginView && !route.addWaypointsView && (
        <>
          <Grid item>
            <FormControl xs={8} sm={3} md={3}>
              <InputLabel id='zone-selector-label'>Selected Zone</InputLabel>
              <Select
                labelId='zone-selector-label'
                id='zone-selector'
                value={selectedZone}
                onChange={(e) => {
                  changeZone(e);
                }}
              >
                {zoneNames.map((name) => (
                  <MenuItem key={uuid()} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                Select Here or `Double Click` a Zone
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={3} md={3}>
            <Button
              variant='outlined'
              color='secondary'
              style={{ padding: "15px" }}
              fullWidth
              onClick={() => {
                toggleClusterView();
              }}
            >
              SHOW ALL CLUSTERS
            </Button>
          </Grid>
        </>
      )}
      <Grid item xs={12} sm={12} md={12}>
        <Map {...mapProps} />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <ButtonGroup size='large' color='primary' fullWidth>
          <Button>Instructions</Button>
          {route.addWaypointsView && (
            <Button
              disabled={route.waypoints.length === 0}
              onClick={() => {
                undoWaypoint();
              }}
            >
              Undo
            </Button>
          )}
          <Button
            disabled={route.directions === null}
            onClick={() => {
              toggleAddWaypointsView();
            }}
          >
            {!route.addWaypointsView ? "Add Waypoints" : "Set Waypoints"}
          </Button>
          <Button
            disabled={route.directions === null}
            onClick={() => {
              dropRoute();
            }}
          >
            Drop Route
          </Button>
          {!route.addWaypointsView && (
            <Button
              onClick={() => {
                toggleResetOriginView();
              }}
            >
              Reset Origin
            </Button>
          )}
        </ButtonGroup>
      </Grid>
    </>
  );
}
