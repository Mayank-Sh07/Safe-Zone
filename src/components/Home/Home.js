import React from "react";
import {
  makeStyles,
  Grid,
  useTheme,
  Paper,
  IconButton,
} from "@material-ui/core";
import Waves from "./Waves";
import Logo from "./Logo";
import DevicesRoundedIcon from "@material-ui/icons/DevicesRounded";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";
import AddLocationSharpIcon from "@material-ui/icons/AddLocationSharp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
    backgroundColor: theme.palette.primary.main,
  },
  plain: {
    padding: "15px",
    textAlign: "center",
    margin: "20px 0px 20px 0px",
  },
  title: {
    textAlign: "center",
    fontWeight: "10px",
    fontSize: "2em",
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
            <h1 className={classes.title}>About</h1>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.plain}>
              <DevicesRoundedIcon style={{ fontSize: 80 }} />
              <h3>Title</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <br />
            <h1 className={classes.title}>Features</h1>
            <br />
          </Grid>
          <Grid item xs={8} md={3} sm={3}>
            <Paper className={classes.paper}>
              <MapTwoToneIcon style={{ fontSize: 60 }} />
              <h3>Title</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
            </Paper>
          </Grid>
          <Grid item xs={8} md={3} sm={3}>
            <Paper className={classes.paper}>
              <AddLocationSharpIcon style={{ fontSize: 60 }} />
              <h3>Title</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
            </Paper>
          </Grid>
          <Grid item xs={8} md={3} sm={3}>
            <Paper className={classes.paper}>
              <AssignmentSharpIcon style={{ fontSize: 60 }} />
              <h3>Title</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify='space-evenly' alignItems='center'>
        <Grid item xs={4} sm={4} md={4}>
          <div className={classes.plain}>Team 6</div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <IconButton
            href='https://www.linkedin.com/in/mayanksh07'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item xs={7} sm={7} md={7}>
          <div className={classes.plain} style={{ textAlign: "end" }}>
            &copy; Copyrights 2020, made with{" "}
            <FavoriteIcon style={{ paddingTop: "3px" }} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
