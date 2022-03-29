import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

 export const useStyles = makeStyles((theme)=>({
    toolbar:{
      display:"flex",
      flexFlow:"row wrap",
      justifyContent:"space-between",
    },
  
    logo:{
      color:"White",
    },

    navlist:{
        minWidth:"250px",
        maxWidth:"300px",
    },

    navProfile:{
        width:"35px",
        height:"35px",
    },

    navLabDesc:{
    backgroundColor: blue["A200"],
    color:"white",
    },

    //sidenav styling---->
    DrawerPaper:{
      width :"250px",
      marginTop:"65px",

    },
    navlinks: {
      color: blueGrey["A400"],
      "& :hover , &:hover div": {
        color: blue["A200"],
      },
      " & div": {
        color: blueGrey["A400"],
      },
    },
    activeNavlinks: {
      color: blue["A700"],
      "& div": {
        color: blue["A700"],
      },
    },

    //main container---->
    wrapper:{
      padding:theme.spacing(2, 2, 0, 34),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 2),
    },
  }
  }));
  