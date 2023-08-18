import React, {useState} from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography, Paper } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import {TextField,Button} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Profile from '../assests/profile.jpeg';
import { CardActionArea, CardActions } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
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
}));

function About(){
    const classes = useStyles();
    
    return(
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
        <Box sx={{  height: '80vh' ,margin:2}}  >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card sx={{ width: '48%' }} >
      <CardActionArea>
      <Avatar alt="Remy Sharp"  sx={{height:350 ,width:250,marginLeft:18}} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Shankar D 
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    <Card sx={{ width: '48%' }}>
      <CardActionArea>
      <Avatar alt="Remy Sharp" src={Profile}  sx={{height:350 ,width:250,marginLeft:18}} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ajay Varma D
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
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