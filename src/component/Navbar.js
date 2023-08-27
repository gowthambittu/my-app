import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles"; // Use this import statement for newer versions of Material-UI

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assests/logo1.jpg";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none", // Hide links on small screens by default
    },
  },
  title: {
    color: "white",
    flexGrow: "1",
    cursor: "pointer",
    marginLeft: "15px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: "darkblue",
      borderBottom: "1px solid white",
    },
  },
  appbar: {
    backgroundColor: "white",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row", // Stack items horizontally on small screens
      alignItems: "center", // Center items vertically on small screens
    },
  },
  logo: {
    marginRight: theme.spacing(2),
    height: "120px",
    width: "auto",
  },
  mobileMenuButton: {
    display: "none", // Hide the menu button on larger screens
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  drawerList: {
    width: 200,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <CssBaseline />
      <Toolbar>
        <Box className={classes.logo} component="img" alt="Your logo." src={Logo} />
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
          {/* Add more links as needed */}
        </div>
        <IconButton
          color="inherit"
          aria-label="Open mobile menu"
          onClick={handleMobileMenuOpen}
          className={classes.mobileMenuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={mobileMenuOpen} onClose={handleMobileMenuClose}>
        <List className={classes.drawerList}>
          <ListItem button component={Link} to="/" onClick={handleMobileMenuClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleMobileMenuClose}>
            <ListItemText primary="About US" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleMobileMenuClose}>
            <ListItemText primary="Contact US" />
          </ListItem>
          {/* Add more links as needed */}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
