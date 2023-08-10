import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Message App</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
