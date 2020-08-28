import React from "react";
import { makeStyles } from "@material-ui/core";
import uuid from "react-uuid";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
  Polygon,
} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

// Style Classes Used for the Components
const useStyles = makeStyles({
  mapgrid: {
    width: "100%",
  },
  mapContainer: {
    height: "80vh",
  },
  map: {
    borderRadius: "1em",
    height: "100%",
  },
});

export default function Map({
  data,
  // origin,
  // directions,
  selectedZone,
  showAllClusters,
  // resetOriginView,
  route,
  controllers,
}) {
  const classes = useStyles();

  React.useEffect(() => {
    if (route.directions === null) controllers.getDirections();
  });

  //Returns Markers for all the Case Locations
  function showAll() {
    let Markers = [];
    data.forEach((zone) => {
      Markers.push(...zone.casecoords);
    });
    return Markers.map((casecoord) => (
      <Marker
        visible={true}
        key={uuid()}
        position={casecoord}
        icon={"assets/covid.svg"}
      />
    ));
  }

  //Returns Markers for the Selected Zone
  function showSelected() {
    let Markers = [];
    data.forEach((zone) => {
      if (zone.properties.zname === selectedZone) {
        Markers.push(...zone.casecoords);
      }
    });
    return Markers.map((casecoord) => (
      <Marker
        visible={true}
        key={uuid()}
        position={casecoord}
        icon={"assets/covid.svg"}
      />
    ));
  }

  // Returns the Polygon Options , Highlights Selected Polygon
  function polygonOptions(zone) {
    if (zone.properties.zname === selectedZone && showAllClusters === false) {
      return {
        strokeColor: "#000000",
        strokeOpacity: 1,
        strokeWeight: 2.5,
        fillColor: zone.properties.fillColor,
        fillOpacity: 0.5,
        zIndex: 100,
      };
    } else
      return {
        strokeColor: "#F0000",
        strokeOpacity: 0.7,
        strokeWeight: 0.5,
        fillColor: zone.properties.fillColor,
        fillOpacity: 0.35,
        zIndex: 100,
      };
  }

  // Gets Coords on MapClick()
  // **CHANGES STATE**
  function mapClick(event) {
    if (route.resetOriginView) {
      console.log("In resetOriginView => Origin Changed => RE-RENDER SAFEMAP");
      let coord = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      controllers.setRoute((prevState) => ({
        ...prevState,
        origin: coord,
        resetOriginView: false,
      }));
    } else if (route.addWaypointsView) {
      console.log("In addWaypointsView => Waypoint added => RE-RENDER SAFEMAP");
      controllers.setRoute((prevState) => ({
        ...prevState,
        waypoints: [...prevState.waypoints, { location: event.latLng }],
        directions: null,
      }));
    }
  }
  const ZoneMap = withGoogleMap(() => (
    <GoogleMap
      defaultCenter={route.origin}
      defaultZoom={13.5}
      onClick={mapClick}
    >
      <Marker
        visible={true}
        key={"originMarker"}
        icon={{ url: "assets/locator.png" }}
        zIndex={9999}
        position={route.origin}
      />

      {route.addWaypointsView && (
        <DirectionsRenderer
          directions={route.directions}
          options={{
            strokeColor: "#F0000",
            strokeOpacity: 0.75,
            strokeWeight: 2,
            zIndex: 9998,
          }}
        />
      )}

      {!route.resetOriginView &&
        data.map((zone) => (
          <Polygon
            path={zone.coords}
            key={uuid()}
            editable={false}
            options={polygonOptions(zone)}
            onClick={mapClick}
            onDblClick={(e) => {
              if (!route.addWaypointsView)
                controllers.changeZone(e, zone.properties.zname);
            }}
          ></Polygon>
        ))}

      {!route.resetOriginView && !route.addWaypointsView && (
        <>
          <MarkerClusterer
            defaultAverageCenter
            enableRetinaIcons
            gridSize={60}
            defaultMaxZoom={15}
            minimumClusterSize={2}
          >
            {showAllClusters ? showAll() : showSelected()}
          </MarkerClusterer>

          <DirectionsRenderer
            directions={route.directions}
            options={{
              strokeColor: "#ff2527",
              strokeOpacity: 0.75,
              strokeWeight: 2,
              zIndex: 9998,
            }}
          />
        </>
      )}
    </GoogleMap>
  ));

  return (
    <>
      <ZoneMap
        containerElement={<div className={classes.mapContainer} />}
        mapElement={<div className={classes.map} />}
        loadingElement={<div className={classes.map} />}
      />
    </>
  );
}
