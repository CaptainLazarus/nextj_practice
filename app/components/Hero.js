import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 3,
        backgroundColor: 'background.paper',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          mb: { xs: 5, md: 0 },
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Order Your Best food anytime
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: 360,
            mb: 3,
          }}
        >
          <TextField
            fullWidth
            label="Type your location"
            variant="outlined"
          />
          <Button variant="contained" style={{ ml: 1 }}>
            Search
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 500,
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
    </Box>
  );
};

export default Hero;
