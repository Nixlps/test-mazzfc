import React from "react";

import './Button.scss';

function Button( props ) {
  return (
    <button className="btn" onClick={props.handleSearchBtn} disabled={props.searchInput!='' ? false : true}> {props.text} </button>
  )
}

export default Button