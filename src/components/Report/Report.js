/*global google*/
import React from "react";
import uuid from "react-uuid";
import {
  Grid,
  makeStyles,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/SendSharp";
import { useForm } from "react-hook-form";
import database from "../../Firebase/firebaseConfig";

const useStyles = makeStyles((theme) => ({
  reportSheet: {
    maxHeight: "120vh",
    width: "100%",
    border: `4px dashed ${theme.palette.primary.dark}`,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light,
  },
  inputRow: {
    margin: "30px 0px 30px 0px",
  },
  form: {
    width: "100%",
    textAlign: "center",
  },
}));

export default function Report({ userLocation, data, setZone, selectedZone }) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = React.useState("detecting...");
  // Array containing all Zone Names
  const zoneNames = data.map((zone) => zone.properties.zname);

  React.useEffect(() => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: userLocation }, function (res, status) {
      if (status === "OK") {
        setAddress(res[0].formatted_address);
      } else alert("Could not auto-detect Address");
    });
  }, [userLocation]);

  function submitted(data) {
    data.Address = address;
    let reportedData = {
      selectedZone: selectedZone,
      geoCoords: userLocation,
      ...data,
    };
    database.ref("reportData").push(reportedData);
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

  return (
    <Grid item xs={12}>
      <form
        className={classes.form}
        onSubmit={handleSubmit((data) => {
          submitted(data);
        })}
      >
        <Container maxWidth='md' fluid>
          <Paper className={classes.reportSheet} elevation={10}>
            <Grid container justify='space-evenly' alignItems='center'>
              <Grid item xs={12} className={classes.inputRow}>
                <Typography variant='h2' style={{ padding: "20px" }}>
                  Report a Case!
                </Typography>
              </Grid>
              <Grid item xs={5} className={classes.inputRow}>
                <TextField
                  name='Name'
                  inputRef={register}
                  label='Your Name'
                  fullWidth
                  variant='outlined'
                  required
                />
              </Grid>
              <Grid item xs={5} className={classes.inputRow}>
                <TextField
                  name='Email'
                  inputRef={register}
                  label='Your E-mail'
                  fullWidth
                  variant='outlined'
                  required
                  type='email'
                />
              </Grid>
              <Grid item xs={12} sm={7} className={classes.inputRow}>
                <TextField
                  name='Address'
                  inputRef={register}
                  disabled
                  helperText='address detected automatically, contact us if wrong'
                  value={address}
                  label='Your Address'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={3} setZone={setZone}>
                <FormControl>
                  <InputLabel id='zone-selector-label'>Select Zone</InputLabel>
                  <Select
                    labelId='zone-selector-label'
                    name='zone-selected'
                    inputRef={register}
                    value={selectedZone}
                    fullWidth
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
                  <FormHelperText>Check your Zone on the Map</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={11} className={classes.inputRow}>
                <TextField
                  name='Message'
                  inputRef={register}
                  label='Get back to us!'
                  rows={5}
                  fullWidth
                  variant='filled'
                  multiline
                />
                <Button
                  variant='contained'
                  className={classes.inputRow}
                  endIcon={<SendIcon />}
                  type='submit'
                  color='primary'
                >
                  Report Case
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </form>
      <br />
    </Grid>
  );
}
