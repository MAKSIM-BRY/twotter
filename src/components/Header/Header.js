import React from 'react';
import ConnexionButtons from '../ConnexionButtons/ConnexionButtons';
import './Header.css';
import twotterLogo from '../../assets/twotterLogo.png';

function Header() {
  return (
    <header className="Header">
      <img className="logo" src={twotterLogo} alt="logo" />
      <span className="title">Twotter</span>
      <ConnexionButtons />
    </header>
  );
}

export default Header;
