import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: '#3f51b5',
        color: 'white',
        padding: '10px 0',
        marginTop: '50px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2024 Arpita. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
