import React, { useState } from 'react';
import './MessageForm.css';

function MessageForm({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mesagge:
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageForm;
