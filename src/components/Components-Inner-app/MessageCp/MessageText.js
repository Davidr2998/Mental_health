import React from 'react';
import './MessageText.css';
/**
 * JGD 
 */

const Messagetext = ({nameU}) =>(
    <div className = "o-paragraph">
        <p>Bienvenido {nameU} ¿Qué planes tienes para el dia de hoy?</p>
    </div>
);

export default Messagetext;