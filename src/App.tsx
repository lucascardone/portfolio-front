import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, Box, CssBaseline, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProfilePage from './screens/ProfilePage';
import { Header } from './components/Header';
import './assets/fonts/Quicksand.otf';
import { AboutMe } from './screens/AboutMe';
import { WorkExperiences } from './screens/WorkExperiences';
import { MoreInfo } from './screens/MoreInfo';
import { ContactMe } from './screens/ContactMe';
import { Skills } from './screens/Skills';

function App() {
  const [theme, setTheme] = useState(
    createTheme({
      palette: {
        mode: 'dark',
        background: {
          default: '#000',
        },
      },
      typography: {
        fontFamily: 'Quicksand, Arial, sans-serif',
      },
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <MainContent setGlobalTheme={setTheme} />
      </Router>
    </ThemeProvider>
  );
}

const MainContent = ({ setGlobalTheme }: { setGlobalTheme: React.Dispatch<React.SetStateAction<any>> }) => {
  const location = useLocation();
  const theme = useTheme(); // Obtener el tema actual

  useEffect(() => {
    // Manejar el overflow dinámicamente basado en la ruta actual
    if (location.pathname === '/') {
      document.body.style.overflow = 'hidden';  // No permitir scroll en la página principal
    } else {
      document.body.style.overflow = 'auto';  // Permitir scroll en otras páginas
    }
  }, [location.pathname]);

  useEffect(() => {
    // Aplicar color del scrollbar dinámicamente desde el theme
    document.documentElement.style.setProperty('--scrollbar-thumb', theme.palette.primary.main);
  }, [theme]);

  return (
    <Box
      component="main"
      sx={{
        p: 3,
        minHeight: '100vh',
        backgroundColor: 'background.default',
        overflow: 'hidden',  // Eliminar esta línea del CSS si se incluye en el estado
      }}
    >
      <Routes>
        <Route path="/" element={<ProfilePage setGlobalTheme={setGlobalTheme} />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/work-experiences" element={<WorkExperiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/info" element={<MoreInfo theme={theme} />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Box>
  );
};

export default App;
