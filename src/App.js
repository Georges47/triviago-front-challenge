import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MessageForm from './components/MessageForm';
import Messages from './components/Messages'; 

function App() {
    const [messages, setMessages] = useState([]);
    const handleSendMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
      };

    return (
        <div className="App">
            <NavBar/> 
            <MessageForm onSendMessage={handleSendMessage}/>
            <Messages messages={messages} />
        </div>
    );
}

export default App;
