import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
// import BookIcon from '@material-ui/icons/Book'
// import PostAddIcon from '@material-ui/icons/PostAdd'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FindInPageIcon from '@material-ui/icons/FindInPage'

import { useStyles } from './HeaderStyles'

export default function Sidenavdata() {
  const classes=useStyles();
     const listItemData = [
        {label:"Dashboard", link:"/", icons:<HomeIcon/>},
        {label:"ALPR", link:"/alpr", icons:<NotificationsActiveIcon/>},
        {label:"ATCC HOURLY", link:"/atcc-hourly", icons:<NotificationsActiveIcon/>},
        {label:"ATCC", link:"/atcc", icons:<NotificationsActiveIcon/>},
        {label:"Search", link:"/search", icons:<FindInPageIcon/>},
        {label:"Log Out", link:"/logout", icons:<ExitToAppIcon/>}
    ]
  return (
    <div>
      <List>
          {listItemData.map((item, i) => (
          <ListItem exact component={NavLink} to = {item.link} 
          className={classes.navlinks} 
          activeClassName={classes.activeNavlinks} key = {i}>
              <ListItemIcon>{item.icons}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
          </ListItem>
          ))}
      </List>
    </div>
  );
}
