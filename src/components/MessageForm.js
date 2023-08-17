import React, { useState } from 'react';

function MessageForm() {
  const [message, setMessage] = useState('');
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Mensaje enviado: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Mensagge:
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
