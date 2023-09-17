import React from "react";

import './Header.scss';
import ProfileImg from '../../assets/images/account-img.png';

function Header() {
  return(
    <header className="header">
      <h1 className="title"> <span>Agile Contest</span> Frontend test </h1>
      <div className="profile"> 
        <div className="app-options"><div></div></div>
        <img className="profile-img" src={ProfileImg} alt="Profile Image" title="Profile Image"/>
      </div>
    </header>
  )
}

export default Header;