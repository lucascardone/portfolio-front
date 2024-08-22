import React from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: 'About Me', path: '/about' },
  { name: 'Work Experiences', path: '/work-experiences' },
  { name: '+Info', path: '/info' },
  { name: 'Contact Me', path: '/contact' },
];

// Estilización personalizada para el botón de Home (con iniciales o ícono)
const CustomHomeButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Quicksand, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '10px',
  padding: '5px 10px',
  '&:hover': {
    color: theme.palette.primary.main, // Usar el color primario del tema en el hover
  },
}));

// Estilización para los botones del menú con animación de subrayado
const CustomNavItem = styled(Button)(({ theme }) => ({
  color: '#fff',
  fontFamily: 'Quicksand, Arial, sans-serif',
  position: 'relative',
  overflow: 'hidden',
  textTransform: 'none',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    left: '-100%',
    transition: 'left 0.5s ease',
  },
  '&:hover::after': {
    left: 0,
  },
}));

export const Header = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
                <RouterLink to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.name}
                </RouterLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: '#000' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
          {/* @ts-ignore */}
          <CustomHomeButton component={RouterLink} to="/" sx={{ flexGrow: 0 }}>
            LC
          </CustomHomeButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}>
            {navItems.map((item) => (
              // @ts-ignore
              <CustomNavItem key={item.name} component={RouterLink} to={item.path}>
                {item.name}
              </CustomNavItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#000' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};
