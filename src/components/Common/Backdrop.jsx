import React from 'react';
import { PropTypes } from 'prop-types';
import './Common.css';

const Backdrop = (props) => {
  const { showBackdrop, onBackdropClick, children } = props;

  return showBackdrop ? (
    <div className="backdrop" onClick={onBackdropClick}>
      {children}
    </div>
  ) : (
    <></>
  );
};

Backdrop.propTypes = {
  showBackdrop: PropTypes.bool.isRequired,
  onBackdropClick: PropTypes.func,
  children: PropTypes.element.isRequired
};

Backdrop.defaultProps = {
  onBackdropClick: () => {}
};

export default Backdrop;
