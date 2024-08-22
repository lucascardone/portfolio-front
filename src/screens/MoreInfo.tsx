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
            <ListItemText primary="Degree in Computer Science" secondary="University XYZ, 2016-2020" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Advanced Programming Course" secondary="Tech Institute, 2021" />
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
            <ListItemText primary="Spanish - Native" />
          </ListItem>
          <ListItem>
            <ListItemText primary="English - Fluent" />
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
            <ListItemText primary="AWS Certified Developer" secondary="Issued by Amazon, 2022" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Scrum Master Certification" secondary="Issued by Scrum Alliance, 2023" />
          </ListItem>
        </List>
      </motion.div>
    </Box>
  );
};
