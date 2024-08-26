import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { darken } from '@mui/system';
import { motion } from 'framer-motion';

// @ts-ignore
export const MoreInfo = ({ theme }) => {
  const darkenedPrimary = darken(theme.palette.primary.main, 0.2); // Color más oscuro para los subtítulos

  return (
    <Box id="info">
      <Typography variant="h4" color="primary" gutterBottom>
        ADDITIONAL INFORMATION
      </Typography>

      {/* Educación */}
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <Typography variant="h5" color={darkenedPrimary} gutterBottom>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Technical Degree in Programming" secondary="Universidad Tecnologica Nacional (UTN), Jul 2022 - Jun 2024" />
          </ListItem>
        </List>
      </motion.div>
      <Divider sx={{ marginY: 3 }} />

      {/* Idiomas */}
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Typography variant="h5" color={darkenedPrimary} gutterBottom>
          Languages
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Spanish" secondary="Native" />
          </ListItem>
          <ListItem>
            <ListItemText primary="English" secondary="Writen: B1+, Oral: B2" />
          </ListItem>
        </List>
      </motion.div>
      <Divider sx={{ marginY: 3 }} />

      {/* Certificaciones */}
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Typography variant="h5" color={darkenedPrimary} gutterBottom>
          Certifications
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Full Stack Web Programming" secondary="Egg Cooperation, Sep 2021 - Oct 2022" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Oracle Next Education Program F2 T3" secondary="Alura Latam, Sep 2022 - Dec 2022" />
          </ListItem>
        </List>
      </motion.div>
    </Box>
  );
};
