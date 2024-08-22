import React, { useState } from 'react';
import { createTheme, Typography, Box, useMediaQuery } from '@mui/material';
//@ts-ignore
import { ColorExtractor } from 'react-color-extractor';

interface ProfilePageProps {
  setGlobalTheme: React.Dispatch<React.SetStateAction<any>>;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ setGlobalTheme }) => {
  const [colors, setColors] = useState<string[]>([]);
  const imageUrl = 'https://avatars.githubusercontent.com/u/89162737?v=4'; 
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  const handleColorsExtracted = (extractedColors: string[]) => {
    if (extractedColors.length > 0) {
      const primaryColor = extractedColors[1];
      const newTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: { main: primaryColor },
          text: {
            primary: primaryColor,
          },
          background: {
            default: '#111',
          },
        },
        typography: {
          fontFamily: 'Quicksand, Arial, sans-serif',
        },
      });
      setGlobalTheme(newTheme);
    }
    setColors(extractedColors);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        padding: isSmallScreen ? '20px' : '0 50px',
        overflow: 'hidden',
        flexDirection: isSmallScreen ? 'column' : 'row',
      }}
    >
      <ColorExtractor src={imageUrl} getColors={handleColorsExtracted} />
      <Box sx={{ flex: 1, textAlign: isSmallScreen ? 'center' : 'left', marginBottom: isSmallScreen ? '20px' : 0 }}>
        <Typography
          variant="h1"
          color={ `${colors[1]} `}
          sx={{
            fontFamily: 'Quicksand, Arial, sans-serif',
            fontSize: isSmallScreen ? '60px' : isMediumScreen ? '100px' : '150px',
            marginBottom: '20px',
          }}
        >
          P O R T <br />
          <Typography
            variant="h1"
            color="#fff"
            sx={{
              fontFamily: 'Quicksand, Arial, sans-serif',
              fontSize: isSmallScreen ? '60px' : isMediumScreen ? '100px' : '150px',
              lineHeight: '1',
              marginBottom: '20px',
            }}>
            F O L I O
          </Typography>
        </Typography>
        <Typography variant="h5" color="#fff" sx={{ fontFamily: 'Quicksand, Arial, sans-serif', marginLeft: isSmallScreen ? 0 : '1%' }}>
          Lucas Cardone - Developer
        </Typography>
      </Box>
      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <img
          src={imageUrl}
          alt="GitHub Profile"
          style={{
            width: isSmallScreen ? '70%' : '100%',
            height: 'auto',
            maxWidth: '400px',
            borderRadius: '100%',
            border: isSmallScreen ? `5px solid ${colors[1] || '#fff'}`: `10px solid ${colors[1] || '#fff'}`,
          }}
        />
      </Box>
    </Box>
  );
};

export default ProfilePage;
