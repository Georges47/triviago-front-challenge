import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const Messages = ({ messages }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" gutterBottom>
                Mensajes
            </Typography>
            <List>
                {messages.map((message, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={message} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Messages;
