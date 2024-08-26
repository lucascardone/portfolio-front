import { useEffect, useState } from 'react';
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
    company: "Egg Cooperation",
    role: "Mentor Experto",
    period: "June 2023 - Present",
    description:
      "Guided students in large online networks, conducted tutorials on various programming topics, and designed a microservice that used AI to analyze and summarize student feedback.",
    technologies: ["Java", "Springboot", "React", "AI", "Microservices", "Git", "GitHub"],
  },
  {
    title: "Web Developer",
    company: "Holmes",
    role: "Fullstack Developer",
    period: "June 2023 - July 2024",
    description:
      "Designed and developed a brewery reservation system, integrated third-party services, and expanded the system to multiple restaurants using React Native.",
    technologies: ["React", "React Native", "Typescript", "JWT", "Google APIs", "MercadoPago", ".NET", "MySQL", "Git", "GitHub"],
  },
  {
    title: "Web Developer",
    company: "Puntos Club",
    role: "Fullstack Developer",
    period: "May 2024 - Present",
    description:
      "Worked on improving the UI of the website, fixing production issues, and using technologies like Symfony, Angular, and MySQL for development and maintenance.",
    technologies: ["Symfony", "Angular", "PHP", "MySQL", "Git", "GitHub"],
  },
  {
    title: "Desktop Application Developer",
    company: "Audens",
    role: "Java Developer",
    period: "July 2022 - May 2023",
    description:
      "Developed a local-use application using Java and SQLite for managing payment receipts, implemented performance improvements, and adjusted the application based on user feedback.",
    technologies: ["Java", "SQLite", "JSwing", "Git"],
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
        WORK EXPERIENCES
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
