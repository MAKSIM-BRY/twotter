import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
moment.locale('fr');
import './Twott.css';
import { getNameFromUserUid } from '../../firebase';

function Twott({ twotContent, ownerId, twottTime }) {
  const [ownerName, setOwnerName] = useState('XXX');

  useEffect(() => {
    getNameFromUserUid(ownerId, (snapshot) => {
      setOwnerName(snapshot.data().displayName);
    });
  }, []);

  return (
    <div className="Twott">
      <div className="twottHeader">
        <span className="headerLabel">{ownerName}</span>
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
