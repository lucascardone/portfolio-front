import React from 'react';
import { Box, Typography } from '@mui/material';

export const AboutMe = () => {
  return (
    <Box id="aboutme" sx={{ padding: '50px 0' }}>
      <Typography variant="h4" color="primary">About Me</Typography>
      <Typography variant="body1" color="textSecondary">
        Aquí va una breve descripción sobre ti.
      </Typography>
    </Box>
  );
};
