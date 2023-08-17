import React, { useState } from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';

function MessagesBox({messages}) {

  return (
    <Grid item xs={12}>
      <Typography variant="h6">Messages</Typography>
        {messages.length !== 0 ? (
          <ul>
            {messages.map((message) => (
              <li key={message.id}>{message.content}</li>
            ))}
          </ul>
        ) : (
          <Typography variant="p" sx={{ color: 'gray' }}>There aren't any messages</Typography>
        )}
    </Grid>
  );
}

export default MessagesBox;
