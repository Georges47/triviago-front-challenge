import React, { useState } from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
} from '@mui/material';

function HeaderComponent(props) {

  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Message App
            </Typography>
        </Toolbar>
    </AppBar>
  );
}

export default HeaderComponent;
