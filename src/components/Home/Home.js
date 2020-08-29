import React from "react";
import {
  makeStyles,
  Grid,
  useTheme,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import Waves from "./Waves";
import Logo from "./Logo";
import DevicesRoundedIcon from "@material-ui/icons/DevicesRounded";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";
import AddLocationSharpIcon from "@material-ui/icons/AddLocationSharp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuOpenSharp from "@material-ui/icons/MenuOpenSharp";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    backgroundColor: theme.palette.primary.light,
    padding: "50px 0px 50px 0px",
    marginTop: "-5px",
  },
  paper: {
    padding: "15px",
    textAlign: "center",
    margin: "20px 0px 20px 0px",
    backgroundColor: theme.palette.secondary.main,
    border: "2px dashed black",
  },
  plain: {
    padding: "30px",
    textAlign: "center",
    margin: "20px 0px 20px 0px",
  },
  title: {
    textAlign: "center",
    fontWeight: "10px",
    fontSize: "2em",
  },
  footer: {
    backgroundColor: theme.palette.background,
  },
}));

export default function Home() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Logo
          height='inherit'
          width='inherit'
          color1={theme.palette.primary.light}
          color2={theme.palette.secondary.light}
          shadow={theme.palette.black}
          id1='home-abc'
          id2='home-xyz'
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "50px" }}>
        <Waves width='inherit' color={theme.palette.primary.light} />
        <Grid
          container
          alignItems='center'
          justify='space-evenly'
          className={classes.aboutSection}
        >
          <Grid item xs={12}>
            <div id='ABOUT'></div>
            <Typography variant='h1' className={classes.title}>
              About
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.plain}>
              <DevicesRoundedIcon style={{ fontSize: 80, color: "#252A34" }} />
              <h3>Travel Safety</h3>
              <p>
                Safezone is a <i>Cross-platform Responsive Web Application</i>{" "}
                made to help users <i>plan their Travelling and Routes </i>
                appropriately based on Real-time Coronavirus case locations,
                Visual Containment Zone data and Coronavirus case clusters.
                Safezone currently renders data for Chennai, a metropolitan city
                in Tamil Nadu with a significantly high number of Coronavirus
                cases. Users can also
                <i> Report Cases</i> in their Localities which can be visualized
                after authentication.
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <br id='FEATURES' />
            <Typography variant='h1' className={classes.title}>
              Features
            </Typography>
            <br />
            <br />
          </Grid>
          <Grid item xs={8} md={3} sm={3}>
            <Paper elevation={11} className={classes.paper}>
              <MapTwoToneIcon style={{ fontSize: 60, color: "#1ec0ff" }} />
              <h3>Map</h3>
              <p>
                The Google-Map in 'Map' section is the main feature of Safezone,
                you can visualize all the Coronavirus cases and Clusters on the
                Map which auto locates you (make sure location services are
                enabled) and allows you to set and alter directions to your
                chosen destination. For more, Select the Map Item from the
                Sidebar
              </p>
            </Paper>
          </Grid>
          <Grid item xs={8} md={3} sm={3}>
            <Paper elevation={11} className={classes.paper}>
              <AddLocationSharpIcon
                style={{ fontSize: 60, color: "#E73A38" }}
              />
              <h3>Waypoints</h3>
              <p>
                Add waypoints to your selected Route within the 'Map' and avoid
                all the Red Zones and Yellow Zones flooded with Coronavirus. A
                key implimentation, adding and setting waypoints will help you
                set the safest Route to reach your destination Corona-free. The
                'view all Clusters' button shows all Clusters in Chennai.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={8} md={3} sm={3}>
            <Paper elevation={11} className={classes.paper}>
              <AssignmentSharpIcon style={{ fontSize: 60, color: "#364857" }} />
              <h3>Report</h3>
              <p>
                The 'Report' section of Safezone allows you to report your
                residence as a Coronavirus case location by taking all the
                necessary inputs for identification and authentication. Details
                of the location are automatically set. Incase of any error/bug
                feel free to Contact us using the links given in the Footer
                below
              </p>
            </Paper>
          </Grid>
          <Grid item>
            <Typography
              variant='h5'
              style={{
                textAlign: "center",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Click the{" "}
              <MenuOpenSharp
                style={{ padding: "10px", transform: "scaleX(-1)" }}
              />{" "}
              Button to open the Sidebar
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify='space-evenly'
        alignItems='center'
        className={classes.footer}
      >
        <Grid item xs={4} sm={4} md={4}>
          <div
            className={classes.plain}
            style={{
              border: "4px dotted gray",
              width: "50%",
              margin: "0px auto 0px auto",
              color: "gray",
            }}
          >
            Team 6
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <IconButton
            href='https://www.linkedin.com/in/mayanksh07'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon style={{ color: "darkslateblue" }} />
          </IconButton>
        </Grid>
        <Grid item xs={7} sm={7} md={7}>
          <div
            className={classes.plain}
            style={{ textAlign: "end", color: "gray" }}
          >
            &copy; Copyrights 2020, made with{" "}
            <FavoriteIcon style={{ paddingTop: "3px", color: "#c91b26" }} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
