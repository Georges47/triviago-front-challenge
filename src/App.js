import React, { useState } from 'react';
import './App.css';
import { Container, Grid, Box } from '@mui/material';
import NavBar from './NavBar';
import MessageForm from './MessageForm';
import Messages from './Messages';

function App() {
    const [messageList, setMessageList] = useState([]);

    const handleMessageSubmit = (message) => {
        setMessageList([...messageList, message]);
    };

    return (
        <Container className="App">
            <NavBar />
            <Box mt={2}> {/* Agregar margen superior de 2 unidades */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MessageForm onMessageSubmit={handleMessageSubmit} />
                    </Grid>
                    <Grid item xs={12}>
                        <Messages messages={messageList} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;
