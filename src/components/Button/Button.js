import { React } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ name, value }) {
  return <button className="Button" type="button" name={name} value={value} />;
}

Button.defaultProps = {
  name: '',
  value: ''
};

Button.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
};

export default Button;
