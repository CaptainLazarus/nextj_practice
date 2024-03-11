import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Rating } from '@mui/material';
import Image from 'next/image';

const HottestDish = () => {
  const dishes = [
    { name: 'Pizza', description: 'A classic Neapolitan pizza with fresh mozzarella and basil.', rating: 4.5, price: '$5', img: '/pizza.jpg' },
    { name: 'Burger', description: 'Juicy beef patty with cheese, lettuce, and our special sauce.', rating: 4.2, price: '$5', img: '/pizza.jpg' },
    { name: 'Chicken', description: 'Tender grilled chicken breast with a side of steamed vegetables.', rating: 4.7, price: '$5', img: '/pizza.jpg' }
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: '#f7f7f7' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Our New Hottest Dish
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {dishes.map((dish, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: 'auto', mb: 4, boxShadow: 3 }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', pt: 2 }}>
                <Box
                  sx={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: 150, // Adjust the size as needed
                    height: 150, // Adjust the size as needed
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src={dish.img}
                    alt={dish.name}
                    width={150}
                    height={150}
                    objectFit="cover"
                    layout="intrinsic"
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '70%',
                    transform: 'translate(-50%, 50%)',
                    bgcolor: 'white',
                    color: '#ff7700',
                    borderRadius: '20%',
                    // width: '48px',
                    // height: '48px',
                    padding: '0.4em',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="body2" component="span">
                    {dish.price}
                  </Typography>
                </Box>
              </Box>
              <CardContent style={{ marginTop: '5%' }}>
                <Box style={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: 'space-between', flexDirection: 'column' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {dish.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dish.description}
                  </Typography>
                  <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <Box style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                    <Image
                      src='/social_images.png'
                      alt="Profiles"
                      width={100}
                      height={10}
                      objectFit="none"
                      layout="intrinsic"
                    />
                    </Box>
                    <Box style={{flex: 1}}>
                    <Rating name="read-only" defaultValue={1} max={1} style={{fontSize:"1em"}} readOnly />
                    <span style={{color: '#ff7700', fontSize: '1em'}}>(5.00)</span>
                    </Box>
                  </Box>
                  <Button variant="contained" style={{ borderRadius: "10px", backgroundColor: 'white', color: '#ff7700', alignSelf: 'end', fontWeight: 'bold' }}>
                    Order Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HottestDish;
