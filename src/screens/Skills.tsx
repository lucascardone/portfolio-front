import { Box, Typography, Grid, Chip } from '@mui/material';

export const Skills = () => {
  const techSkills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'CSS'];
  const softSkills = ['Comunicación', 'Trabajo en equipo', 'Adaptabilidad', 'Resolución de problemas'];

  return (
    <Box id="skills">
      <Typography variant="h4" color="primary">SKILLS</Typography>
      
      <Typography variant="h5" color="textPrimary" sx={{ marginTop: 4 }}>Tech Skills</Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {techSkills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} color="primary" />
          </Grid>
        ))}
      </Grid>
      
      <Typography variant="h5" color="textPrimary" sx={{ marginTop: 4 }}>Soft Skills</Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {softSkills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} color="secondary" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
