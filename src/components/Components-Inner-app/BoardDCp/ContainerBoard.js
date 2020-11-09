import React from 'react';
import './ContainerBoard.css';
import Buttonspages from './ButtonsPages.js';
import Titlecontainer from './TitleContainer.js';
import Searchbar from './SearchBar.js';
import Cardcontainerm from './CardContainerM.js';
/**
 * JGD 
 */

const Containerboard = ({Namereciver, Namemdsend}) =>(
    
    <div className="o-shape-container">
        <div className="o-container-board">
            <Buttonspages url1="Dashboard" url2="Dates" url3="Community"></Buttonspages>
            <Titlecontainer Nametitle ={Namereciver} ></Titlecontainer>
            <Searchbar></Searchbar>
            <Cardcontainerm Namemdreciver ={Namemdsend}></Cardcontainerm>
        </div>
    </div>
    
)
export default Containerboard;