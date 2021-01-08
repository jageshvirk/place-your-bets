import React from 'react';
import { PropTypes } from 'prop-types';
import './Common.css';

const Avatar = (props) => {
  const { photo, altText } = props;
  return (
    <div className="avatar">
      <img src={photo} alt={altText} />
    </div>
  );
};

Avatar.propTypes = {
  photo: PropTypes.string.isRequired,
  altText: PropTypes.string
};

Avatar.defaultProps = {
  altText: ''
};

export default Avatar;
