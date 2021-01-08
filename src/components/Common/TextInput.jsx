import React from 'react';
import { PropTypes } from 'prop-types';
import './Common.css';

const TextInput = (props) => {
  const {
    name,
    id,
    value,
    onChange,
    type,
    min,
    max,
    label,
    placeholder,
    labelClassName,
    inputClassName,
    autoComplete
  } = props;
  return (
    <div>
      <label className={labelClassName}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        min={min}
        max={max}
        placeholder={placeholder}
        className={inputClassName}
        autoComplete={autoComplete}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  autoComplete: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  inputClassName: 'primaryInput',
  labelClassName: 'primaryLabel',
  autoComplete: 'off',
  min: null,
  max: null
};

export default TextInput;
