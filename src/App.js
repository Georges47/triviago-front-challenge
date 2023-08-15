import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import MessageForm from './MessageForm';
import Messages from './Messages';

function App() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="App">
            <NavBar />
            <MessageForm onSendMessage={handleSendMessage} />
            <Messages messages={messages} />
        </div>
    );
}

export default App;

