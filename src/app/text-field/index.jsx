import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default function TextField({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className='__dml_text-field'
        value={value}
        onChange={(e) => onChange(e.target.value, e)}
      />
    </div>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf("text", "password", "email", "number")
    .isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
