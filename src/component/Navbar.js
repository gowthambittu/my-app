import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../assests/logo1.jpg";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    paddingTop:"80px",
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 
 title: {
    paddingTop:"80px",
    color:"#2680be",
    width:"100px",
    flexGrow: "1",
    cursor: "pointer",
    marginLeft: "15px",

    [theme.breakpoints.down('sm')]: {
      paddingTop: "20px", // Adjust padding for small screens (mobile)
      fontSize: '1rem',   // Adjust font size for small screens (mobile)
      width: "auto",      // Allow the title to adjust its width for small screens
    },
  },
  link: {
    textDecoration: "none",
    color: "#2680be",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "darkblue",
      borderBottom: "1px solid white",
    }
   
  },
  appbar: {
    backgroundColor: 'white' ,
    color: "black",
    height: "120px",
    [theme.breakpoints.down('sm')]: {
      height: "80px", // Adjust height for small screens (mobile)
    },
  },
  logo:{
    marginRight: theme.spacing(2),
    height:"120px",
    width:"auto",
    [theme.breakpoints.down('sm')]: {
      height: "80px", // Adjust height for small screens (mobile)
      marginRight: 0, // Remove margin for small screens (mobile)
    },
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" width='Auto' className={classes.appbar}> 
      <CssBaseline />
      <Toolbar>
      <Box  className={classes.logo}
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={Logo}
        />
        <Typography variant="h5" className={classes.title}>
          SRA Infra Developers
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About US
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact US
            </Link>
            {/* <Link to="/faq" className={classes.link}>
              FAQ
            </Link> */}
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;