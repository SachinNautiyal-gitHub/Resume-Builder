

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Stack, ListItemButton, IconButton, Drawer, List} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar sx={{ bgcolor: 'white', color: 'black', position: 'static' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'cursive', color: '#900603' }}>
            Resume Builder
          </Typography>
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton selected={location.pathname === '/' ? true : false}>
                Resume Templates
            </ListItemButton>
              </Link>
              <Link to="/myresume" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton selected={location.pathname === '/myresume' ? true : false}>
                My Resume
            </ListItemButton>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton selected={location.pathname === '/about' ? true : false}>
                About us
            </ListItemButton>
              </Link>
          </Stack>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { md: 'none', lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItemButton onClick={handleDrawerClose} selected={location.pathname === '/' ? true : false}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Resume Templates
            </Link>
          </ListItemButton>
          <ListItemButton onClick={handleDrawerClose} selected={location.pathname === '/myresume' ? true : false}>
            <Link to="/myresume" style={{ textDecoration: 'none', color: 'black' }}>
              My Resume
            </Link>
          </ListItemButton>
          <ListItemButton onClick={handleDrawerClose} selected={location.pathname === '/about' ? true : false}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
              About us
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

