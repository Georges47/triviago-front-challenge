import React from 'react';
import './Messages.css';
import Message from './Message';

function Messages({ messages }) {
  return (
    <div className="messages">
      <h1>Message</h1>
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} text={message} />
        ))}
      </div>
    </div>
  );
}

export default Messages;
