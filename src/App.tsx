import React, { useState } from 'react';
import { createTheme, ThemeProvider, Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './screens/ProfilePage';
import { Header } from './components/Header';
import './assets/fonts/Quicksand.otf';
import { AboutMe } from './screens/AboutMe';
import { WorkExperiences } from './screens/WorkExperiences';
import { MoreInfo } from './screens/MoreInfo';
import { ContactMe } from './screens/ContactMe';

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
        <Box
          component="main"
          sx={{
            p: 3,
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden',
          }}
        >
          <Routes>
            <Route path="/" element={<ProfilePage setGlobalTheme={setTheme} />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/work-experiences" element={<WorkExperiences />} />
            <Route path="/info" element={<MoreInfo />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
