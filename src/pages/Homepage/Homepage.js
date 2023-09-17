import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";

import './HomePage.scss';
import GoogleLogo from '../../assets/images/google-logo.svg';

function HomePage() {
  
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();

  const btnText = "Buscar";

  function handleSearchChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function handleSearchBtn(){
    navigate({
      pathname: "search",
      search: `?${createSearchParams({
        q: searchInput
      }).toString()}`
  })
  }
  
  return(
    <>
      <Header />
      <main> 
        <div className="container homepage">
          <GoogleLogo />

          <SearchBar 
            handleSearchChange={handleSearchChange} 
            searchInput={searchInput} 
            setSearchInput={setSearchInput}
          />

          <Button 
            text={btnText} 
            searchInput={searchInput}
            handleSearchBtn={handleSearchBtn}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage;