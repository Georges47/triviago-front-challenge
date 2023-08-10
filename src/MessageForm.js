import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const MessageForm = ({ onMessageSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            onMessageSubmit(message);
            setMessage('');
        }
    };

    return (
        <Box display="flex" justifyContent="center">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={8}>
                        <TextField
                            label="Mensaje"
                            variant="outlined"
                            fullWidth
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" type="submit">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default MessageForm;
