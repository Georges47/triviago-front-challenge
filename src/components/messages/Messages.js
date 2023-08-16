import React from 'react';
import './Messages.css';

const Messages = ({ messages }) => {

    {/* Messages → recibe la prop messages que es el array de los mensajes */}

    return (
        <div className="messages">                          {/* css */}

            {/* map → para recorrer arrays
              * permite aplicar una función a cada elemento, crea un nuevo array con los resultados de la función
              * en este caso crea elementos div para cada mensaje*/}
            {messages.map((message, index) =>(
                <div key={index} className="message">       {/* se asocia una key porque le permite un manejo eficiente a react */}
                    {message}                               {/* muestra el texto del mensaje en cada elemento de la lista. */}
                </div>
            ))}
        </div>
    );
};

export default Messages;


{/* EJEMPLO MAP
  *
   const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map((number) => {
    return number * 2;
    });

    console.log(doubledNumbers); // Resultado: [2, 4, 6, 8, 10]
*/}