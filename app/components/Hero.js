import * as React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MyLocationIcon from '@mui/icons-material/MyLocation'; // Make sure to import this icon
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; // Import Typography for text elements
import Image from 'next/image';

const Hero = () => {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center', // Align items vertically
      padding: '2rem', // Add some padding around the section
      backgroundColor: '#fff', // A background color can be added here
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Align text to the start
          justifyContent: 'center',
          maxWidth: '600px', // Set a max width for the text container
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#ff7700' }}>
          Order Your Best
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
          food anytime
        </Typography>
        <Typography variant="h6" sx={{ color: '#555', marginBottom: '1rem' }}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '4px',
            p: '2px 4px',
            width: '100%', // Use a static width for the search box
            maxWidth: '500px', // Set a max width for the search box
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
            }}
            placeholder="Type your location"
            inputProps={{ 'aria-label': 'type your location' }}
          />
          <IconButton sx={{ p: '10px', display: 'flex', alignItems: 'center' }} aria-label="locate me">
            <MyLocationIcon />
            <Typography variant="body2" noWrap component="span" sx={{ ml: 1 }}>
              Location me
            </Typography>
          </IconButton>
          <Button
            variant="contained"
            style={{
              backgroundColor: 'blue',
              textTransform: 'none', // Prevent uppercase styling
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: '500px',
          width: '100%', // This ensures the image container scales nicely.
          height: 'auto',
        }}
      >
        <Image
          src="/smiling_woman.jpg"
          alt="Woman smiling"
          width={500}
          height={600}
          layout="responsive"
        />
      </Box>
    </section>
  );
};

export default Hero;
