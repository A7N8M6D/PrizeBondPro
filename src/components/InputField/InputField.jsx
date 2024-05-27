// src/InputField.js

import React from "react";
import PropTypes from "prop-types";

const InputField = ({ Icon, type, name, value, onChange, onBlur, placeholder, error, touched }) => {
  return (
    <div className="mb-3 position-relative">
      <div className="icon position-absolute">
        <Icon />
      </div>
      <input
        type={type}
        className="form-control pl-4"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {touched && error ? (
        <div className="text-danger">{error}</div>
      ) : null}
    </div>
  );
};

InputField.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

export default InputField;
