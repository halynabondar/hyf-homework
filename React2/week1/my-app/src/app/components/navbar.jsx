"use client"

import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import {useRouter} from 'next/navigation';
import {useMediaQuery, useTheme} from '@mui/material';

const Navbar = () => {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleNavigation = (path) => {
        router.push(path);
        setDrawerOpen(false);
    };

    const menuItems = [
        {text: 'Home', path: '/'},
        {text: 'Blogs', path: '/blogs'},
        {text: 'Mars Rover Photo', path: '/marsRover'},
        {text: 'NASA Epic Image', path: '/nasa/epic'},
        {text: 'Form', path: '/form'},
    ];

    const renderMenuItem = (item) => (
        <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
            <ListItemText primary={item.text} />
        </ListItem>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: 'cornflowerblue', marginBottom: "20px" }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Website
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <List>
                                {menuItems.map(renderMenuItem)}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    menuItems.map((item) => (
                        <Button color="inherit" key={item.text} onClick={() => handleNavigation(item.path)}>
                            {item.text}
                        </Button>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;