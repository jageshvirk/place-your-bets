import React from 'react';
import { PropTypes } from 'prop-types';
import './Common.css';

const Button = (props) => {
  const { buttonText, onButtonClick, isButtonDisabled, className } = props;
  return (
    <button className={className} type="button" onClick={onButtonClick} disabled={isButtonDisabled}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  isButtonDisabled: false,
  className: 'primaryButton'
};

export default Button;
