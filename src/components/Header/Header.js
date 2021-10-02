import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <img className="logo" src="./twotterLogo.png" alt="logo" />
      <span className="title">Twotter</span>
    </header>
  );
}

export default Header;
