import React, { useState } from 'react';
import { signInWithGoogle, logOut } from '../../firebase';

import './ConnexionButtons.css';

function ConnexionButtons() {
  const [connected, setConnexion] = useState(false);

  const handleSubmitConnexion = (e) => {
    if (!connected) {
      signInWithGoogle(() => {
        setConnexion(!connected);
      });
    } else {
      logOut(() => {
        setConnexion(!connected);
      });
    }
  };

  return (
    <div className="Buttons">
      <button
        className="ConnexionButtons"
        onClick={handleSubmitConnexion.bind(this)}
      >
        {connected ? 'Déconnexion' : 'Connexion'}
      </button>
    </div>
  );
}

export default ConnexionButtons;
