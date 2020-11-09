import React from 'react';
import './SearchBar.css';
import lupa from '../images/lupa.svg'

/**
 * JGD 
 */

const Searchbar = () =>(

    <div className="o-bar-container">
            <div className="o-icon-search">
                <img className="o-icon-img" src={lupa} alt= "Foto del lupa" />
            </div>
        <input type="text"  className="o-input" name="name" placeholder="Ingresa el nombre de un profesional"></input>
    </div>
  
);

export default Searchbar;