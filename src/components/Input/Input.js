import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const Input = ({onChange, value, onKeyPress}) => (
  <label>Search: <input
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder="Search..."
  /></label>
);

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {
  },
  onKeyPress: () => {
  },
  value: '',
};

export default Input;