import { Box, Typography, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

export const AboutMe = () => {
  const theme = useTheme();

  // Animación del rectángulo
  const slideInAnimation = keyframes`
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  `;

  return (
    <Box id="aboutme" sx={{ position: 'relative', padding: '40px 20px' }}>
      {/* Rectángulo animado */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '10px',
          minHeight: '50px', // Mínimo tamaño del rectángulo
          maxHeight: '100%', // Máximo tamaño dependiendo del texto
          backgroundColor: theme.palette.primary.main,
          animation: `${slideInAnimation} 1s ease-out forwards`, // Aquí agregamos 'forwards'
        }}
      />
      
      {/* Contenido del About Me */}
      <Box sx={{ marginLeft: '30px' }}> {/* Espacio para el rectángulo */}
        <Typography variant="h4" color="primary" gutterBottom>
          ABOUT ME
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2em'}}>
          Aquí va una breve descripción sobre ti. Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Typography>
      </Box>
    </Box>
  );
};
