import React from 'react'
import '../Title/Title.css';

const Title =(props) => { 
    return (
        <div className="o-title-container">
            <h1 className="o-title">Rapport</h1>
            <h3 className="o-subtitle">{props.tipo}</h3>
        </div>
    );
}

export default Title;