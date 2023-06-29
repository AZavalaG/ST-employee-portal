import React from "react";
import './Styles/Styles.css';

/*Autor: Christian Laurian 
date : 23/jun/2023
ticket: E01H03-Buttons
description: specifies the content type and style of the button to use
example:
      <Button type="error" content="Error Button" />
      <Button type="inactive" content="inactive Button" />
      <Button type="info" content="Info Button" />
      <Button type="success" content="Success Button" />*/

const Button = ({ type, content }) => {
    let buttonStyle = '';

    //Determinar el estilo del boton segun el tipo
    switch (type) {
        case 'error':
            buttonStyle = 'button-error';
            break;
        case 'alert':
            buttonStyle = 'button-alert';
            break;
        case 'info':
            buttonStyle = 'button-info';
            break;
        case 'success':
            buttonStyle = 'button-success';
            break;
            case 'inactive':
            buttonStyle = 'button-inactive';
            break;
        default:
            buttonStyle = 'button-default';
            break;
    }

    const handleClick = () => {
        // Manejar el evento según el tipo de botón
        switch (type) {
          case 'error':
            // Lógica para el evento de botón de error
            console.log('Botón de error presionado');
            break;
          case 'alert':
            // Lógica para el evento de botón de alerta
            console.log('Botón de alerta presionado');
            break;
          case 'info':
            // Lógica para el evento de botón de información
            console.log('Botón de información presionado');
            break;
          case 'success':
            // Lógica para el evento de botón de éxito
            console.log('Botón de éxito presionado');
            break;
            case 'inactive':
            // Lógica para el evento de botón de éxito
            console.log('Botón de inactivo presionado');
            break;
          default:
            // Lógica para otros tipos de botón (si es necesario)
            break;
        }
      };

    return (
        <button className={buttonStyle} onClick={handleClick}>
            {content}
        </button>
    );
};

export default Button;
