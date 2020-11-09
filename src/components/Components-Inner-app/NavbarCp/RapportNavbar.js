import React from 'react';
import './RapportNavbar.css';
import Nameuser from './NameUser.js';
import Usericon from './UserIcon.js';
import Logorapport from './LogoRapport.js';
/**
 * JGD 
 */

const Rapportnavabar = ({Nuserreciver}) =>(
    <div className="o-navabar">
        <div className="o-logo">
         <Logorapport></Logorapport>
        </div>

        <div className= "o-nav-items">
         <Nameuser Nuser ={Nuserreciver}></Nameuser>
         <Usericon></Usericon>
        </div>
    </div>
);

export default Rapportnavabar;