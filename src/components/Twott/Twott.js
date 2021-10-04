import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
moment.locale('fr');
import './Twott.css';

function Twott({ twotContent, ownerId, twottTime }) {
  return (
    <div className="Twott">
      <div className="twottHeader">
        <span className="headerLabel">{ownerId}</span>
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
