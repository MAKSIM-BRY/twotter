import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
moment.locale('fr');
import './Twott.css';

function Twott({ twotContent, ownerId, twottTime }) {
  console.log(moment(Date(twottTime.seconds)).format('mm:HH DD/MM/YYYY'));
  return (
    <div className="Twott">
      <div className="twottHeader">
        <span className="headerLabel">{ownerId}</span>
        <span className="headerLabel">
          {moment(Date(twottTime.seconds)).format('mm:HH DD/MM/YYYY')}
        </span>
      </div>
      {twotContent}
    </div>
  );
}

Twott.defaultProps = {
  twotContent: '',
  ownerId: '000',
  twottTime: 'ff'
};

Twott.propTypes = {
  twotContent: PropTypes.string,
  ownerId: PropTypes.string,
  twottTime: PropTypes.string
};

export default Twott;
