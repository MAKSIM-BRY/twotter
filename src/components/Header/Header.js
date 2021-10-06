import React from 'react';
import './Header.css';
import twotterLogo from '../../assets/twotterLogo.png';

function Header() {
  return (
    <header className="Header">
      <img className="logo" src={twotterLogo} alt="logo" />
      <span className="title">Twotter</span>
    </header>
  );
}

export default Header;
