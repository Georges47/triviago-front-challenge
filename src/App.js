import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from "@mui/material";
import AppBar from './AppBar';
import MessageForm from './MessageForm';
import Messages from './Messages';
import {baseurl} from "./Const";

function App() {
    const [messages, setMessages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const handleNewMessage = async (newMessage) => {
        try {
            const response = await fetch('/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: newMessage })
            });

            const data = await response.json();

            setMessages([...messages, data]);
        } catch (error) {
            console.error('Error creating message:', error);
        }
    };

    const fetchMessages = async (page) => {
        console.log(`aaaaaaaaaaaaaaaaaaaaa`)
        try {
            const response = await fetch(baseurl + `/messages`);
            const data = await response.json();

            setMessages(data.content);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        fetchMessages(currentPage);
    }, []);

    fetchMessages(currentPage)

    return (
        <Container className="App">
            <div>
                <AppBar />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                        MessageForm
                    </Typography>
                    <MessageForm onMessageSubmit={handleNewMessage} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                        Messages
                    </Typography>
                    <Messages messages={messages} />
                    <div>
                        {currentPage > 0 && (
                            <button onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
                        )}
                        {currentPage < totalPages - 1 && (
                            <button onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
                        )}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;