import React from "react";
import {
  Button,
  makeStyles,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/HelpSharp";
import ExploreOffSharpIcon from "@material-ui/icons/ExploreOffSharp";
import EditLocationSharpIcon from "@material-ui/icons/EditLocationSharp";
import AddLocationSharpIcon from "@material-ui/icons/AddLocationSharp";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import BlurCircularTwoToneIcon from "@material-ui/icons/BlurCircularTwoTone";
import BlurOffTwoToneIcon from "@material-ui/icons/BlurOffTwoTone";

const useStyles = makeStyles((theme) => ({
  iconButtonLabel: {
    display: "flex",
    flexDirection: "column",
  },
  smallLabel: {
    fontSize: "8px",
  },
  item: {
    margin: "20px 10px 20px 10px",
  },
  background: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Instructions() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={handleClickOpen}
        classes={{ label: classes.iconButtonLabel }}
      >
        <HelpIcon style={{ fontSize: 50, color: "F0000" }} />
        <small className={classes.smallLabel}>Instructions</small>
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        className={classes.background}
      >
        <DialogTitle id='alert-dialog-title'>
          {"Instructions for Useage"}
        </DialogTitle>
        <DialogContent>
          <Grid container justify='space-around' alignItems='center'>
            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              {<BlurCircularTwoToneIcon color='secondary' />} - Displays all
              Clusters on the Map
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              {<BlurOffTwoToneIcon color='secondary' />} - Displays selected
              Zone's Clusters on the Map
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              {<EditLocationSharpIcon color='secondary' />} - Allows you to
              Change your Origin on the Map
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              {<AddLocationSharpIcon color='secondary' />} - Allows you to add
              waypoints and alter the Active route
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              {<ExploreOffSharpIcon color='secondary' />} - Drops the Active
              route
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              {<CheckCircleTwoToneIcon color='secondary' />} - Sets the added
              waypoints on the map
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='primary'
            variant='contained'
            fullWidth
            autoFocus
          >
            Understood
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
