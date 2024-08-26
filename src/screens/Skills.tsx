import { Box, Typography, Grid, Chip } from '@mui/material';

export const Skills = () => {
  const techSkills = [
    'Java',
    'Springboot',
    'React',
    'Typescript',
    'Javascript',
    'MySQL',
    'MongoDB',
    'C#',
    '.NET',
    'React Native',
    'Git',
    'Jira',
    'Trello',
    'Figma'
  ];

  const softSkills = [
    'Teamwork',
    'Proactivity',
    'Continuous learning',
    'Self-management skills',
    'Attention to detail',
    'Adaptability to change',
    'Verbal communication',
    'Analytical thinking',
    'Autonomy in learning',
    'Ability to give feedback',
    'Written communication',
    'Problem-solving skills'
  ];

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

      <Typography variant="h5" color="secondary" sx={{ marginTop: 4 }}>Soft Skills</Typography>
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
