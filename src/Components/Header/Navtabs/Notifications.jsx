import {
  Avatar,
  Badge,
  Box,
  Button,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";


// import {useStyles} from '../Navbar'

import React from "react";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
import { useStyles } from "../HeaderStyles";
// import { mergeClasses } from "@material-ui/styles";


export default function Notifications() {
  
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
    { label: "Alex", desc: "like your feed...." },
    { label: "Sayyam", desc: "like your feed...." },
    { label: "Chetan", desc: "like your feed...." },
    { label: "Harry", desc: "like your feed...." },
  ];

  return (
    <Box>
      <Button
        id="Notifications"
        aria-controls="Notifications"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={3} color="secondary"></Badge>
        <NotificationsActive />
      </Button>

      <Menu
        id="Notifications"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <List className={classes.navlist}>
        {dropDown.map((item, i) => (
          <ListItem key={i}  onClick={handleClose}>
            <ListItem>
              <Avatar className={classes.navLabDesc}>{item.label[0].toUpperCase()}</Avatar>
            </ListItem>
            <ListItem>
              <Avatar>{item.desc}</Avatar>
            </ListItem>
          </ListItem>
          
        ))}
        </List>
      </Menu>
    </Box>
  );
}
