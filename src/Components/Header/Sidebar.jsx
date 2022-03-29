// import {
//   AppBar,
//   Box,
//   CssBaseline,
//   Divider,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Typography,
// } from "@material-ui/core";
// import React from "react";
// import MailIcon from '@material-ui/icons/Mail'
// import InboxIcon from '@material-ui/icons/MoveToInbox'

// const drawerWidth = 240;

// export default function Sidebar() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//     <CssBaseline />
//     <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//       <Toolbar>
//         <Typography variant="h6" noWrap component="div">
//           Clipped drawer
//         </Typography>
//       </Toolbar>
//     </AppBar>
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//       }}
//     >
//       <Toolbar />
//       <Box sx={{ overflow: 'auto' }}>
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Box>
//     </Drawer>
//     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//       <Toolbar />
//       <Typography paragraph>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//         enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//         imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//         Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//         Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//         adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//         nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//         leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//         feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//         consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//         sapien faucibus et molestie ac.
//       </Typography>
//       <Typography paragraph>
//         Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//         eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//         neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//         tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//         sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//         tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//         gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//         et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//         tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//         eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//         posuere sollicitudin aliquam ultrices sagittis orci a.
//       </Typography>
//     </Box>
//   </Box>
// );
// }

import { Drawer, Hidden, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./HeaderStyles";
import Sidenavdata from "./Sidenavdata";

export default function Sidebar() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerOpen = ()=>{
        setMobileOpen(!mobileOpen)
    }
  return (
   
    <nav className={classes.drawer} aria-label="mailbox-folders">
      <Hidden mdUp implementation="css">
        <Drawer
        //   container={Paper}
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerOpen}
          classes={{
            paper: classes.DrawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Sidenavdata/>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
          <Drawer classes={{
              paper:classes.DrawerPaper,
          }}
            variant="permanent"
          open>
              <Sidenavdata/>

          </Drawer>
          </Hidden>
    </nav>
  );
}