import React from "react";

import './SearchBar.scss';
import SearchIcon from '../../assets/icons/search-icon.svg'

function SearchBar() {
  return(
    <div className="search-bar">
      <SearchIcon />
      <input type="text" className="search-box"/>
    </div>
  )
}

export default SearchBar;