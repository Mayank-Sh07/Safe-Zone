/*global google*/
import React from "react";
import uuid from "react-uuid";
import {
  makeStyles,
  Grid,
  Select,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";
// Places Search-Bar import
import Search from "./Search";
// Google Map import
import Map from "./Map";
// Instructions import
import Instructions from "../Instructions/Instructions";
//Icons
import ReplayIcon from "@material-ui/icons/Replay";
import ExploreOffSharpIcon from "@material-ui/icons/ExploreOffSharp";
import EditLocationSharpIcon from "@material-ui/icons/EditLocationSharp";
import AddLocationSharpIcon from "@material-ui/icons/AddLocationSharp";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import BlurCircularTwoToneIcon from "@material-ui/icons/BlurCircularTwoTone";
import BlurOffTwoToneIcon from "@material-ui/icons/BlurOffTwoTone";

var directionsService; // will be assigned google's DirectionsService()

// Style Classes Used for the Components
const useStyles = makeStyles((theme) => ({
  section: {
    padding: "15px",
  },
  iconButtonLabel: {
    display: "flex",
    flexDirection: "column",
  },
  smallLabel: {
    fontSize: "8px",
  },
}));

export default function SafeMap({ data, origin, selectedZone, setZone }) {
  console.log(data);
  const classes = useStyles();
  // Array containing all Zone Names
  const zoneNames = data.map((zone) => zone.properties.zname);
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

  console.log(selectedZone);

  return (
    <>
      {!route.addWaypointsView && (
        <Grid item xs={10} sm={8} md={8} className={classes.section}>
          <Search setRoute={setRoute} resetOriginView={route.resetOriginView} />
        </Grid>
      )}
      {!route.resetOriginView && !route.addWaypointsView && (
        <>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            className={classes.section}
            style={{ textAlign: "center" }}
          >
            <FormControl>
              <InputLabel id='zone-selector-label'>Selected Zone</InputLabel>
              <Select
                labelId='zone-selector-label'
                id='zone-selector'
                value={selectedZone}
                variant='standard'
                onChange={(e) => {
                  changeZone(e);
                }}
              >
                {zoneNames.map((name) => (
                  <MenuItem
                    key={uuid()}
                    style={{ backgroundColor: "darkgrey" }}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                Select Here or `Double Click` a Zone
              </FormHelperText>
            </FormControl>
          </Grid>
        </>
      )}
      <Grid item xs={12} sm={12} md={12} className={classes.section}>
        <Map {...mapProps} />
      </Grid>
      <Grid item xs={6} sm={6} md={6} className={classes.section}>
        <ButtonGroup
          size='large'
          color='primary'
          fullWidth
          style={{ justifyContent: "space-evenly" }}
        >
          <Instructions />
          {route.addWaypointsView && (
            <IconButton
              classes={{ label: classes.iconButtonLabel }}
              disabled={route.waypoints.length === 0}
              onClick={() => {
                undoWaypoint();
              }}
            >
              <ReplayIcon style={{ fontSize: 50 }} />
              <small className={classes.smallLabel}>Undo</small>
            </IconButton>
          )}
          <IconButton
            classes={{ label: classes.iconButtonLabel }}
            disabled={route.directions === null}
            onClick={() => {
              toggleAddWaypointsView();
            }}
          >
            {!route.addWaypointsView ? (
              <AddLocationSharpIcon style={{ fontSize: 50 }} />
            ) : (
              <CheckCircleTwoToneIcon style={{ fontSize: 50 }} />
            )}
            {!route.addWaypointsView ? (
              <small className={classes.smallLabel}>Add Waypoints</small>
            ) : (
              <small className={classes.smallLabel}>Set Waypoints</small>
            )}
          </IconButton>
          <IconButton
            classes={{ label: classes.iconButtonLabel }}
            disabled={route.directions === null}
            onClick={() => {
              dropRoute();
            }}
          >
            <ExploreOffSharpIcon style={{ fontSize: 50 }} />
            <small className={classes.smallLabel}>drop route</small>
          </IconButton>
          {!route.addWaypointsView && (
            <IconButton
              classes={{ label: classes.iconButtonLabel }}
              onClick={() => {
                toggleResetOriginView();
              }}
            >
              <EditLocationSharpIcon style={{ fontSize: 50 }} />
              <small className={classes.smallLabel}>Reset origin</small>
            </IconButton>
          )}
          <IconButton
            classes={{ label: classes.iconButtonLabel }}
            variant='outlined'
            onClick={() => {
              toggleClusterView();
            }}
          >
            {!showAllClusters ? (
              <>
                <BlurCircularTwoToneIcon style={{ fontSize: 50 }} />
                <small className={classes.smallLabel}>All Clusters</small>
              </>
            ) : (
              <>
                <BlurOffTwoToneIcon style={{ fontSize: 50 }} />
                <small className={classes.smallLabel}>Show Selected</small>
              </>
            )}
          </IconButton>
        </ButtonGroup>
      </Grid>
    </>
  );
}
