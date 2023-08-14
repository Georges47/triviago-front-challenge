import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Box,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from '@mui/material';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const addMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Message App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className='App'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Message Form</Typography>
            <FormGroup controlId="name">
              <FormControl>
                <TextField
                  type="text"
                  placeholder="Enter message"
                  value={newMessage}
                  onChange={handleInputChange}
                />
              </FormControl>
            </FormGroup>
            <Button onClick={addMessage}>Sent</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Messages</Typography>
            {messages.length !== 0 ? (
            <ul>
              {messages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
            ) : (
              <Typography variant="p" sx={{color: 'gray'}}>There aren't any message</Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
