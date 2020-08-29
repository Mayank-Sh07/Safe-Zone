import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import uuid from "react-uuid";
import { makeStyles, TextField } from "@material-ui/core";

// Style Classes Used for the Components
const useStyles = makeStyles((theme) => ({
  autocompleteDropdownContainer: {
    position: "absolute",
    zIndex: 1000,
    padding: "0px 15px 0px 15px",
    minWidth: "61%",
    maxWidth: "62%",
  },
}));

export default function Search({ setRoute, resetOriginView }) {
  const classes = useStyles();
  // Stores the Address Entered by the User
  const [state, setState] = useState({ address: "" });
  // Sets the State to User Entered State
  const handleChange = (address) => {
    setState({ address: address });
  };
  // Gets the selected Suggestions LatLng
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        if (resetOriginView)
          // Sets the Origin to selected Origin
          setRoute((prevState) => ({
            ...prevState,
            origin: latLng,
            resetOriginView: false,
            directions: null,
          }));
        //Sets the Destination to selected Destination
        else
          setRoute((prevState) => ({
            ...prevState,
            destination: latLng,
            directions: null,
          }));
      })
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <>
      <PlacesAutocomplete
        value={state.address}
        onChange={(addr) => {
          handleChange(addr);
        }}
        onSelect={(addr) => {
          handleSelect(addr);
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <TextField
              {...getInputProps({
                className: "location-search-input",
              })}
              label='Enter Destination'
              fullWidth
              variant='outlined'
            />
            <div className={classes.autocompleteDropdownContainer}>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "white", cursor: "pointer" }
                  : { backgroundColor: "grey", cursor: "pointer" };
                return (
                  <div
                    key={uuid()}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span key={uuid()}>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </>
  );
}
