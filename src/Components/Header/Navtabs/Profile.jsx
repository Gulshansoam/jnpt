import {
  Avatar,
  Box,
  Button,
  ListItem,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import image from './logo22.png'
// import {useStyles} from '../Navbar'

import React from "react";

import { useStyles } from "../HeaderStyles";

export default function Profile() {
     const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
 };
 
 
 const dropDown = [
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        aria-expanded='true'
        onClick={handleClick}
        startIcon={<Avatar src={image} className={classes.navProfile}></Avatar>}
       >
        
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {dropDown.map((item, i) => (
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItem>{item.item}</ListItem>
            <ListItem>{item.label}</ListItem>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
