import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
moment.locale('fr');
import './Twott.css';
import { getDataFromUserUid } from '../../firebase';

function Twott({ twotContent, ownerId, twottTime }) {
  const [ownerName, setOwnerName] = useState('XXX');
  const [PhotoURL, setPhotoURL] = useState('');

  useEffect(() => {
    getDataFromUserUid(ownerId, (snapshot) => {
      setOwnerName(snapshot.data().displayName);
      setPhotoURL(snapshot.data().photoURL);
    });
  }, []);

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
      {twotContent}
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
  twottTime: PropTypes.object
};

export default Twott;
