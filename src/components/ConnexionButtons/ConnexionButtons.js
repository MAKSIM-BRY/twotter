import React, { useState } from 'react';
import { signInWithGoogle, logOut } from '../../firebase';

import './ConnexionButtons.css';

function ConnexionButtons() {
  const [connected, setConnexion] = useState(false);

  const handleSubmitConnexion = (e) => {
    setConnexion(!connected);
    console.log(connected);
    logOut();
  };

  return (
    <div className="Buttons">
      <button
        className="ConnexionButtons"
        onClick={handleSubmitConnexion.bind(this)}
      >
        Connexion
      </button>
    </div>
  );
}

export default ConnexionButtons;
