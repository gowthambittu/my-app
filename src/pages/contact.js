import React, {useState} from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography,Paper,TextField} from '@mui/material';
import { Button, CardActionArea, CardActions, makeStyles } from '@material-ui/core';



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
    highlightedText: {
        backgroundColor: '#9ed9e2', // Highlight color (you can use any color code)
        padding: '2px 4px', // Add padding for decoration
        borderRadius: '4px', // Rounded corners for decoration
      },
  }));

function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
     
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Email sent successfully.');
      // Reset the form data if needed
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      alert("Email sent successfully")
    } else {
      console.error('Error sending email.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
    const classes = useStyles();
    return(
    <Container className={classes.root} sx={{ bgcolor: '#cfe8fc' }} >
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4" gutterBottom>
          Contact US
        </Typography>
        <Typography variant="h6" gutterBottom>
        Address:
      </Typography>
      <Typography>
        Plot No: <span className={classes.highlightedText}>378, Anjanadri Nagar Colony, Hayathnagar,
        <br />
        Hyderabad, Telangana - </span><span className={classes.highlightedText}>501505</span>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Mobile No:
      </Typography>
      <Typography>
        <span className={classes.highlightedText}>9550009057</span>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Email:
      </Typography>
      <Typography>
        <span className={classes.highlightedText}>srainfradevelopers9@gmail.com</span>
      </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
          className={classes.formField}
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          className={classes.formField}
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          className={classes.formField}
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
        />
        <TextField
          className={classes.formField}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
        </Paper>
    </Container>

   
    )
}

export default Contact;