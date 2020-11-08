import React from 'react';
import './ButtonsPages.css';
/**
 * JGD 
 */

const Buttonspages = ({url1, url2, url3}) =>(
    <div className="o-buttons-container">
            <div>
                <a href={url1}>
                <button className="o-buttonPages o-bt-left">Directorio de Profesionales</button>
                </a>
            </div>
            <div>
                <a href={url2}>
                <button className="o-buttonPages">Mis citas</button>
                </a>
            </div>
            <div>
                <a href={url3}>
                <button className="o-buttonPages o-bt-right">Comunidad</button>
                </a>
            </div>
    </div>
)
export default Buttonspages;