"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ArrowButtonGroup from './ArrowButtonGroup';
import styles from '../styles/Menu.module.css';

const Menu = () => {
  const menuItems = [
    { name: 'Fried Chicken', img: '/pizza.jpg' }, // replace with actual image paths
    { name: 'Pizza', img: '/pizza.jpg' },
    { name: 'Burger', img: '/pizza.jpg' },
    { name: 'Coffee', img: '/pizza.jpg' },
    { name: 'Salad', img: '/pizza.jpg' }
  ];

  const [selectedArrow, setSelectedArrow] = React.useState(0);

  return (
    <Box sx={{ textAlign: 'center', my: 8}}>

      <Box style={{display: 'flex', marginBottom: '4%', padding: '2%'}}>
        <Box style={{flex: 1}}>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 4, flex: 1 }}>
          <Box className={styles.diamondBackground}>
            <Typography className={styles.diamondText} variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
              Our
            </Typography>
          </Box>
          <Typography variant="h4" component="span" sx={{ lineHeight: '1', verticalAlign: 'middle', fontWeight: 'bold' }}>
            Menus
          </Typography>
        </Box>
        <Box style={{flex: 1, display: 'flex', justifyContent: 'end', flexDirection: 'column'}}>
          <ArrowButtonGroup/>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        {menuItems.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m: 2,
            transform: index % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)',
            // border: '1px solid black',
            padding: '1%',
            borderRadius: '10%',
            backgroundColor: item.name === 'Burger' ? 'orange' : 'white',
            color: item.name === 'Burger' ? 'white' : 'black',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)', // Shadow effect
          }}>
            <Card sx={{ 
              maxWidth: 140, 
              borderRadius: '5%', 
              mb: 1,
              }}>
              <CardMedia
                component="img"
                image={item.img}
                alt={item.name}
                style={{ 
                  height: 140, 
                  width: 140, 
                  borderRadius: '5%',
                  // padding: '10%' 
                }}
              />
            </Card>
            <Typography variant="subtitle1" component="h3">
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
