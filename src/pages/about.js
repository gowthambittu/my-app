import React, { useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography, Paper } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Profile from '../assests/profile.jpeg';
import { CardActionArea, CardActions } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  box:{
    height: '40vh', 
    // margin: 2,
    width:'50vh',
    marginLeft:'21rem',
    [theme.breakpoints.down('sm')]: {
     height:'50vh',
     marginLeft:-11,
    },
   
  },
  imageCard:{
    width: '25vh',
    height:'40vh',
    [theme.breakpoints.down('sm')]: {
      height:'30vh'
     },
  },
  img:{
    // height:1000, 
    // width:1000, 
    marginLeft: 45,
    marginTop:50,
    [theme.breakpoints.down('sm')]: {
      height: 50, 
      width: 80, 
      marginRight:40,
      marginTop:20,
     },
     name:{
      
     }
  }
}));

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.root} sx={{ bgcolor: '#cfe8fc' }} >
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <p>
          SRA INFRA DEVELOPERS was incorporated in the year 2017 and managing partners D.Shankar and D.Ajay Varma
        </p>

        <Typography>
          At SRA, we are dedicated to turning your dream home into a
          reality. With our exceptional construction solutions and attention to
          detail, we ensure that every project is executed to perfection.
          we have earned a reputation for delivering high-quality craftsmanship,
          attention to detail. and excellent customer service.Contact us today
          to start your construction journey.
        </Typography>
        <Box className={classes.box} >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card className={classes.imageCard} >
              <CardActionArea>
                <Avatar alt="Remy Sharp"  sx={{width:120,height:120}} className={classes.img} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className={classes.name}>
                    Shankar D
                  </Typography>
                 
                </CardContent>
              </CardActionArea>

            </Card>
            <Card className={classes.imageCard}>
              <CardActionArea>
                <Avatar alt="Remy Sharp" src={Profile} sx={{width:120,height:120}} className={classes.img} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className={classes.name}>
                    Ajay Varma D
                  </Typography>
                  
                </CardContent>
              </CardActionArea>

            </Card>
          </div>

        </Box>

      </Paper>
    </Container>
  )
}

export default About;