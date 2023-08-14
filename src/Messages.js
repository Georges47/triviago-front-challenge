import React from 'react';

const Messages = ({ messages }) => {
    return (
        <div style={{ textAlign: 'center', padding: '30px', color: '#008080' }}>
            {messages.map((message) => (
                <div key={message.id}>{message.content}</div>
            ))}
        </div>
    );
};

export default Messages;