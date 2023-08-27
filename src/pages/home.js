import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from "@material-ui/core";
import HomeImg from "../assests/homePgImg.jpeg";


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(3),
      },
    navlinks: {
      paddingTop:"80px",
      marginLeft: theme.spacing(10),
      display: "flex",
    },
    container: {
        maxWidth: '1150px', // Set the maximum width for larger screens
        margin: '0 auto',   // Center the container horizontally
        [theme.breakpoints.down('sm')]: {
          maxWidth: '100%', // Adjust for smaller screens (mobile)
          padding: '0 0px', // Add some horizontal padding for mobile
        },
      },
}
)
);

function Home(){
    const classes = useStyles();
    return(
        <div>
           <Container className={classes.root} sx={{ bgcolor: '#cfe8fc' }} fixed>
           <Box sx={{ bgcolor: '#cfe8fc', minHeight: '100vh' }}>
                <Box className={classes.container}>
                    <ImageList variant="woven" cols={1} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Box>
             </Box>
            </Container>
        </div>
    )
}

const itemData = [
    {
      img: HomeImg,
      title: 'Bed',
    }
    // ,
    // {
    //   img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    //   title: 'Kitchen',
    // }
    // {
    //   img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    //   title: 'Sink',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    //   title: 'Books',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    //   title: 'Chairs',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    //   title: 'Candle',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    //   title: 'Laptop',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    //   title: 'Doors',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    //   title: 'Coffee',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    //   title: 'Storage',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    //   title: 'Coffee table',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    //   title: 'Blinds',
    // },
  ];
  

export default Home;