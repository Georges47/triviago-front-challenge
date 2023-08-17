import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function MessagesForm({ createMessage }) {
  const [newMessage, setNewMessage] = useState('');

  return (
    <Grid item xs={12}>
      <Typography variant="h6">Message Form</Typography>
      <TextField
        type="text"
        placeholder="Enter message"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)} />
      <Button onClick={() => createMessage(newMessage, ()=>{setNewMessage('')})}>Send</Button>
    </Grid>
  );
}

export default MessagesForm;
