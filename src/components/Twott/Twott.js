import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
moment.locale('fr');
import './Twott.css';
import {
  getDataFromUserUid,
  addLikeOnTwott,
  getNumberOfLikesOfATwott
} from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Twott({ twottId, twotContent, ownerId, twottTime }) {
  const [ownerName, setOwnerName] = useState('XXX');
  const [PhotoURL, setPhotoURL] = useState('');

  const [Licked, setLicked] = useState(false);
  const [nmbrLikes, setNmbrLikes] = useState('10');
  const userId = useSelector((state) => state.connexionData.uid);
  const likeTwott = () => {
    addLikeOnTwott(twottId, userId);
  };

  useEffect(() => {
    getDataFromUserUid(ownerId, (snapshot) => {
      setOwnerName(snapshot.data().displayName);
      setPhotoURL(snapshot.data().photoURL);
    });
    getNumberOfLikesOfATwott(twottId, (snapshot) => {
      const arrayUserIdLiked = snapshot.data().likes;
      setNmbrLikes(arrayUserIdLiked.length);
      if (arrayUserIdLiked.includes(userId)) {
        setLicked(true);
      } else {
        setLicked(false);
      }
    });
  }, [userId]);

  return (
    <div className="Twott">
      <div className="twottHeader">
        <img className="profilPicture" src={PhotoURL} alt="PhotoURL" />
        <span className="headerLabel">{ownerName}</span>
        <span className="emptySpace" />
        <span className="headerLabel">
          {moment(new Date(1970, 0, 1).setSeconds(twottTime.seconds)).format(
            'HH:mm DD/MM/YYYY'
          )}
        </span>
      </div>
      <div className="twotContent">{twotContent}</div>
      <div className="footer">
        <div className={Licked ? 'hearthReaction licked' : 'hearthReaction'}>
          <span className="numberLikes">{nmbrLikes > 0 && nmbrLikes}</span>
          <FontAwesomeIcon icon={faHeart} onClick={likeTwott} />
        </div>
      </div>
    </div>
  );
}

Twott.defaultProps = {
  twotContent: '',
  ownerId: '000',
  twottTime: { seconds: 515656488465 }
};

Twott.propTypes = {
  twotContent: PropTypes.string,
  ownerId: PropTypes.string,
  twottTime: PropTypes.object,
  twottId: PropTypes.string.isRequired
};

export default Twott;
