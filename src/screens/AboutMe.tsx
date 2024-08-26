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
        <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2em' }}>
          Hi there! I'm Lucas Cardone, a software developer who loves turning ideas into code. I’m all about creating practical, user-friendly solutions—whether it’s on the frontend or backend. <br /><br />
          Along the way, I’ve worked on some pretty cool projects, like building a bot for a Quoridor competition hosted by Eventbrite, which ended up doing really well. I’ve also had the chance to experiment with AI, creating a microservice at Egg Cooperation that helped analyze student feedback. These projects were great learning experiences and just a small part of my journey in tech. <br /><br />
          When I’m not coding, you’ll find me exploring new tools and techniques, always on the lookout for ways to grow and improve. Programming isn’t just my job; it’s something I genuinely enjoy, and I’m excited to see where it takes me next.
        </Typography>
      </Box>
    </Box>
  );
};
