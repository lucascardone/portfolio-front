import React from 'react';
import { Box, Typography } from '@mui/material';

export const ContactMe = () => {
  return (
    <Box id="contactme" sx={{ padding: '50px 0' }}>
      <Typography variant="h4" color="primary">Contact Me</Typography>
      <Typography variant="body1" color="textSecondary">
        Aquí puedes poner tu información de contacto.
      </Typography>
    </Box>
  );
};
