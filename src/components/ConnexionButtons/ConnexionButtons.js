import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  connexionGetter,
  disconnexion
} from '../../features/connexion/connexionSlice';

import { signInWithGoogle, logOut } from '../../firebase';

import './ConnexionButtons.css';

function ConnexionButtons() {
  const dispatch = useDispatch();
  const profilPicture = useSelector((state) => state.connexionData.photoURL);
  const connected = useSelector((state) => state.connexionData.connected);

  const handleSubmitConnexion = () => {
    if (!connected) {
      signInWithGoogle((userData) => {
        dispatch(connexionGetter(userData));
      });
    } else {
      logOut(() => {
        dispatch(disconnexion());
      });
    }
  };

  return (
    <div className="Buttons">
      <div>
        {connected && (
          <img className="logo" src={profilPicture} alt="ProfilPicture" />
        )}
      </div>

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
