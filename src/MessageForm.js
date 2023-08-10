import React, { useState } from 'react';

const MessageForm = ({ onMessageSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            onMessageSubmit(message);//ACA TIRO EL FETCH
            setMessage('');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px'}}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mensaje"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default MessageForm;