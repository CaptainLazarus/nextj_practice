import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Custom IconButton component
const CustomIconButton = ({ isSelected, IconComponent }) => (
  <IconButton
    style={{
      backgroundColor: isSelected ? 'orange' : 'white',
      color: isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: isSelected ? 'red' : '#eeeeee',
      },
      borderRadius: '12px', // Rounded square appearance
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)', // Shadow effect
      margin: '8px',
      width: '48px', // Adjust size as needed
      height: '48px', // Adjust size as needed
    }}
  >
    <IconComponent />
  </IconButton>
);

// Main component with the button group
const ArrowButtonGroup = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', overflow: 'hidden'}}>
      <CustomIconButton isSelected={false} IconComponent={ArrowBackIosNewIcon} />
      <CustomIconButton isSelected={true} IconComponent={ArrowForwardIosIcon} />
    </Box>
  );
};

export default ArrowButtonGroup;
