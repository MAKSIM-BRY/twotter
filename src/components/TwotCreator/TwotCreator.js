import React, { useState } from 'react';
import './TwotCreator.css';
import { addTwott } from '../../firebase';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function TwotCreator() {
  const [TwotContent, SetTwotContent] = useState('');

  const userUid = useSelector((state) => state.connexionData.uid);
  const userConnected = useSelector((state) => state.connexionData.connected);

  const handleSubmitData = (event) => {
    event.preventDefault();
    addTwott(userUid, TwotContent);
    SetTwotContent('');
  };

  const handleSendTwottEnter = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmitData(event);
    }
  };

  const handleUpdateTwotContent = (event) => {
    SetTwotContent(event.target.value);
  };

  return (
    <div className="TwotCreator">
      <form onSubmit={handleSubmitData}>
        <textarea
          className="TwotContent"
          value={TwotContent}
          onChange={handleUpdateTwotContent}
          onKeyPress={handleSendTwottEnter}
        />
        <div className="caracterCount">{TwotContent.length}/500</div>
        <div className="listeButtons">
          <button className="SendButton" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />{' '}
            <span className="buttonLabel">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default TwotCreator;
