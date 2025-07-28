import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart,
  Book,
  Home,
  Close,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { state } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Books', icon: <Book />, path: '/books' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          BookStore
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
            sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          top: 'auto', 
          bottom: 0, 
          bgcolor: 'primary.main',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-around', minHeight: { xs: 64, sm: 70 } }}>
          {isMobile ? (
            // Mobile bottom navigation
            <>
              <IconButton
                color="inherit"
                component={Link}
                to="/"
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 0.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                <Home />
                <Typography variant="caption">Home</Typography>
              </IconButton>
              
              <IconButton
                color="inherit"
                component={Link}
                to="/books"
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 0.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                <Book />
                <Typography variant="caption">Books</Typography>
              </IconButton>
              
              <IconButton
                color="inherit"
                onClick={() => navigate('/cart')}
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 0.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                <Badge badgeContent={state.totalItems} color="error">
                  <ShoppingCart />
                </Badge>
                <Typography variant="caption">Cart</Typography>
              </IconButton>
              
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 0.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                <MenuIcon />
                <Typography variant="caption">Menu</Typography>
              </IconButton>
            </>
          ) : (
            // Desktop bottom navigation
            <>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                📚 BookStore
              </Typography>

              <Box sx={{ display: 'flex', gap: 3 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{ 
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.5,
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              <IconButton 
                color="inherit" 
                onClick={() => navigate('/cart')}
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 0.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                <Badge badgeContent={state.totalItems} color="error">
                  <ShoppingCart />
                </Badge>
                <Typography variant="caption">Cart</Typography>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
