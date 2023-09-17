import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Data from "../../data";

import SearchBar from "../../components/SearchBar/SearchBar";

import './ResultPage.scss';
import GoogleLogo from '../../assets/images/google-logo.svg';
import CloseIcon from '../../assets/icons/close-icon.svg';


function ResultPage(){

  const [ searchparams, setSearchParams ] = useSearchParams();
  const [ searchInput, setSearchInput ] = useState( searchparams.get('q') );
  const [ focusedAnimal, setFocusedAnimal ] = useState({});
  const [ isOpen, setIsOpen ] = useState(false);

  function getFilteredItems(searchInput, Data){
    if (!searchInput){
      return []
    }

    return Data.filter( animal => animal.type.includes((searchInput)))
  }

  const filteredItems = getFilteredItems(searchInput, Data);

  function handleSearchChange(e) {
    e.preventDefault();

    setSearchInput(e.target.value);

    setSearchParams('q='+e.target.value);

    setIsOpen(false)

    if(Object.keys(filteredItems).length === 0 ){
      setFocusedAnimal({})
    }
  }

  return(
    <>
      <div className="result-header">
        <GoogleLogo />
        <SearchBar
          handleSearchChange={handleSearchChange}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>

      <div className="results-container container">
        {!searchInput && 
          <div className="not-found">
            <p>Try lookin for: <span>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</span></p>
        </div>}

        {(searchInput && Object.keys(filteredItems).length===0) && 
          <div className="not-found">
            <p>No results found for '<span>{searchInput}</span>'.</p>
            <p>Try lookin for: <span>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</span></p>
        </div>}

        {filteredItems && filteredItems.map(animal => 
            <div className="animal-card" key={animal.id.toString()} onClick={() => {
              setFocusedAnimal({
                image: animal.image, 
                url: animal.url, 
                title: animal.title, 
                description: animal.description
              })

              setIsOpen(true)
            }}>
              <p className="animal-url"> {animal.url} </p>
              <h3 className="animal-title"> {animal.title} </h3>
              <p className="animal-desc"> {animal.description} </p>
            </div>
        )}

        <div className={ isOpen && searchInput ? "animal-focused" : 'not-focused'}>
          <div className="popup">
            <CloseIcon onClick={() => setIsOpen(false)}/>
            <img src={focusedAnimal.image} className="animal-img" />
            <p className="animal-url"> {focusedAnimal.url} </p>
            <h3 className="animal-title"> {focusedAnimal.title} </h3>
            <p className="animal-desc"> {focusedAnimal.description} </p>
          </div>
        </div>
       
      </div>
    </>

  )
}

export default ResultPage;