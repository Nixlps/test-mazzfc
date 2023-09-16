import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";

import './Homepage.scss';
import GoogleLogo from '../../assets/images/google-logo.svg';

function Homepage() {
  
  const btnText = "Buscar"
  
  return(
    <main> 
      <div className="container homepage">
        <GoogleLogo />
        <SearchBar />
        <Button text={btnText}/>
      </div>
    </main>
  )
}

export default Homepage;