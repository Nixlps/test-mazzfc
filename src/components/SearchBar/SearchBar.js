import React, { useRef } from "react";

import './SearchBar.scss';
import SearchIcon from '../../assets/icons/search-icon.svg';
import CloseIcon from '../../assets/icons/close-icon.svg';

function SearchBar(props) {

  const ref = useRef(null);

  function deletSearchInput(){
    props.setSearchInput('');
    ref.current.focus();
  }

  return(
    <div className='search-bar' onChange={ props.handleSearchChange }>
      <SearchIcon />
      <input type='text' className='search-box' value={ props.searchInput } ref={ref}/>
      <CloseIcon className={ props.searchInput!='' ? '' : 'disabled' } onClick={ deletSearchInput } />
    </div>
  )
}

export default SearchBar;