import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const SkillBar = ({ skill, value }) => {
  return (
    <Box marginBottom="20px">
      <Typography>{skill}</Typography>
      <LinearProgress variant="determinate" value={value} style={{ height: '10px', borderRadius: '5px' }} />
    </Box>
  );
};

export default SkillBar;
