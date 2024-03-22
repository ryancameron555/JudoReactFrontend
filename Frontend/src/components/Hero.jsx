/** @format */

import React from 'react';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { HeroSection } from '../themes/styles/default';
import ClassImage from '../assets/judoImages/class.jpg';

const StyledHeroSection = styled(HeroSection)({
  position: 'relative', // Ensure position is relative for the overlay
  backgroundImage: `url(${ClassImage})`, // Set the background image
  backgroundSize: 'cover', // Cover the entire area with the background image
  backgroundPosition: 'center', // Center the background image
  backgroundRepeat: 'no-repeat', // Do not repeat the background image
  backgroundWidth: '100%', // Set the width to 100%
  textAlign: 'center', // Center text
  color: '#de0202', // Text color (white)
  padding: '50px', // Adjust padding as needed
  '&::before': {
    // Add overlay for background image
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity as needed
    zIndex: -1, // Ensure it's behind the text
  },
});

const Hero = () => {
  return (
    <StyledHeroSection>
      <Typography variant="h2" gutterBottom>
        Welcome to Hajamie Judo
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Not just a sport, but a way of life
      </Typography>
      <Button variant="contained" color="secondary">
        Free Trial Period
      </Button>
    </StyledHeroSection>
  );
};

export default Hero;
