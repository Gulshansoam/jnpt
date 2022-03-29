import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Hidden,
  IconButton,
} from "@material-ui/core";
// import { makeStyles } from '@material-ui/styles';
import Profile from "./Navtabs/Profile";
import Notifications from "./Navtabs/Notifications";
// import messages from "./Navtabs/Messages";
import { useStyles } from "./HeaderStyles";
import Messages from "./Navtabs/Messages";
import ListIcon from "@material-ui/icons/List";
//

export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logo}>
            {"JNPT Traffic Sentinal"}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Hidden smDown>
            <Box style={{ display: "flex" }}>
              <Notifications />
              <Messages />
              <Profile />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit">
              <ListIcon />
              </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
