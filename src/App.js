import React from 'react';
import './App.css';
import {
  Box,
} from '@mui/material';
import HeaderComponent from './components/Header/HeaderComponent';
import MainComponent from './components/Main/MainComponent';

function App() {
  
  return (
    <Box>
      <HeaderComponent/>
      <MainComponent/>
    </Box>
  );
}

export default App;
