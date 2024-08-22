import React from 'react';
import { Box, Typography } from '@mui/material';

export const MoreInfo = () => {
  return (
    <Box id="info" sx={{ padding: '50px 0' }}>
      <Typography variant="h4" color="primary">+Info</Typography>
      <Typography variant="body1" color="textSecondary">
        Aquí puedes incluir información adicional sobre ti.
      </Typography>
    </Box>
  );
};
