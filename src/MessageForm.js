import React, { useState } from 'react';
import './MessageForm.css';

const MessageForm = ({ onSendMessage }) => {

    {/* onSendMessage → función para manejar el envío de mensajes
                      → se pasa como prop
                      → la lógica se define en App.js que es el componente principal
                      → las props se pasan "de más arriba a más abajo*/}


    const [message, setMessage] = useState('');
    {/* Message    → es el estado
      * setMessage → es la función que va a actualizar el estado.
      * useState   → hook que permite agregar estado a los componentes, empieza como un string vacío */}

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        {/* handleMessageChange → maneja del cambio de mensaje, actualiza message con la entrada. */}
    };

    const handleSubmit = (event) => {
        event.preventDefault();         {/* "función preexistente en JavaScript que se utiliza en eventos del DOM para
                                          prevenir el comportamiento predeterminado del navegador en respuesta a un
                                          evento específico, como hacer clic en un enlace o enviar un formulario." */}
        if (message.trim() !== '') {    {/* verifica que el mensaje no sea vacío para llamar a onSendMessage(m)*/}
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="message-form">      {/* css para el formulario */}
            <form onSubmit={handleSubmit}>  {/* formulario html que se vincula al evento onSubmit y llama a la función
                                              handleSubmit cuando se envía el formulario*/}
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={handleMessageChange}
                />

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default MessageForm;

{/*
    input -> para escribir el mensaje
    type -> propiedad que indica que es texto
    placeholder -> propiedad que muestra un mensaje predeterminado
    value=(message} -> Asigna el valor del campo de entrada al estado message
    onChange -> para que el estado se actualice

*/}
