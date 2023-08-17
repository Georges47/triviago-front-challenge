import React, { useState } from 'react';
import './MessageForm.css';

function MessageForm() {
  const [message, setMessage] = useState('');
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message sent successfully: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mensagge:
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
