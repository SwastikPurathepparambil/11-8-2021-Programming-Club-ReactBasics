import React from 'react';
import './navbar.css';

function Navbar(props) {
  return (
    <div className="navbar">
      {props.name}
    </div>
  );
}

export default Navbar;