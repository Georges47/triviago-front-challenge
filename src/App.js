import React, { useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import MessageForm from './components/messageForm/MessageForm';
import Messages from './components/messages/Messages';

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

