import React from 'react';

const Messages = ({ messages }) => {//Renderiza los mensajes
    return (
        <div style={{ textAlign: 'center', padding: '30px', color: '#008080' }}>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
    );
};

export default Messages;