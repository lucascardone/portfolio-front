import { useEffect } from 'react';
import { Box, Typography, Button, Tooltip } from '@mui/material';
import { LinkedIn, GitHub, Email, Description } from '@mui/icons-material';

export const ContactMe = () => {
  const email = "tucorreo@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copiado al portapapeles!");
  };

  useEffect(() => {
    // Desactiva el scroll globalmente en el cuerpo al cargar ContactMe
    document.body.style.overflow = 'hidden';

    return () => {
      // Vuelve a activar el scroll global cuando se abandone la sección
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Box
      id="contactme"
      sx={{
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" color="primary" sx={{ marginBottom: '20px' }}>
        CONTACT ME
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* LinkedIn */}
        <Button
          startIcon={<LinkedIn />}
          href="https://www.linkedin.com/in/tuperfil"
          target="_blank"
          sx={{ color: '#fff', '&:hover': { color: 'primary.main' } }}
        >
          Visit my LinkedIn
        </Button>

        {/* GitHub */}
        <Button
          startIcon={<GitHub />}
          href="https://github.com/tuusuario"
          target="_blank"
          sx={{ color: '#fff', '&:hover': { color: 'primary.main' } }}
        >
          Visit my GitHub
        </Button>

        {/* Email */}
        <Tooltip title="Click to Copy" placement="top">
          <Button
            startIcon={<Email />}
            onClick={handleCopyEmail}
            sx={{ color: '#fff', '&:hover': { color: 'primary.main' } }}
          >
            {email}
          </Button>
        </Tooltip>

        {/* CV */}
        <Button
          startIcon={<Description />}
          href="enlace-a-tu-cv"
          target="_blank"
          sx={{ color: '#fff', '&:hover': { color: 'primary.main' } }}
        >
          Get my CV
        </Button>
      </Box>
    </Box>
  );
};

export default ContactMe;
