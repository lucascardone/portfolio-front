import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Chip, Stack, Grid } from '@mui/material';

interface WorkExperience {
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: WorkExperience[] = [
  {
    title: "Software Developer",
    company: "Tech Company",
    role: "Frontend Developer",
    period: "January 2020 - Present",
    description:
      "Worked on building and maintaining web applications with a focus on creating responsive and user-friendly designs.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Material-UI"],
  },
  {
    title: "Backend Engineer",
    company: "Backend Solutions",
    role: "Backend Developer",
    period: "May 2018 - December 2019",
    description:
      "Developed APIs and managed server-side logic for various projects, ensuring optimal performance and security.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker"],
  },
  // Puedes agregar más experiencias aquí
];

export const WorkExperiences = () => {
  const [visible, setVisible] = useState<boolean[]>([]);

  useEffect(() => {
    // Al cargar la página, iniciar las animaciones
    const timeouts = experiences.map((_, index) =>
      setTimeout(() => {
        setVisible((prevVisible) => {
          const newVisible = [...prevVisible];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 300) // Retraso de 300ms entre cada tarjeta
    );

    return () => {
      timeouts.forEach(clearTimeout); // Limpiar timeouts cuando el componente se desmonte
    };
  }, []);

  return (
    <Box id="workexperiences">
      <Typography variant="h4" color="primary" gutterBottom>
        Work Experiences
      </Typography>

      <Grid container spacing={3}>
        {experiences.map((experience, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            key={index}
            sx={{
              opacity: visible[index] ? 1 : 0, // Controlar la opacidad
              transform: visible[index] ? 'translateY(0)' : 'translateY(20px)', // Controlar la posición
              transition: 'opacity 0.5s ease, transform 0.5s ease', // Transiciones suaves
            }}
          >
            <Card 
              sx={{ backgroundColor: '#1e1e1e', color: '#fff', height: '100%' }}
            >
              <CardContent>
                {/* Título y Empresa */}
                <Typography 
                  variant="h5" 
                  color="primary" 
                  gutterBottom
                >
                  {experience.title} | {experience.company}
                </Typography>

                {/* Rol */}
                <Typography 
                  variant="subtitle1" 
                  color="#fff" 
                  gutterBottom
                >
                  {experience.role}
                </Typography>

                {/* Periodo */}
                <Typography 
                  variant="body2" 
                  color="textSecondary" 
                  sx={{ fontStyle: 'italic' }}
                  gutterBottom
                >
                  {experience.period}
                </Typography>

                {/* Descripción */}
                <Typography 
                  variant="body1" 
                  color="#fff" 
                  paragraph
                >
                  {experience.description}
                </Typography>

                {/* Tecnologías usadas */}
                <Stack 
                  direction="row" 
                  spacing={1} 
                  sx={{ flexWrap: 'wrap' }}
                >
                  {experience.technologies.map((tech, techIndex) => (
                    <Chip 
                      key={techIndex} 
                      label={tech} 
                      sx={{ marginBottom: '10px', backgroundColor: '#333', color: '#fff' }} 
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
