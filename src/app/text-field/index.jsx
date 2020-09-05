import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TextField({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  const [_value, _setValue] = useState(value);

  useEffect(() => {
    _setValue(value);
  }, [value]);

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className='__dml_text-field'
        value={_value}
        onChange={(e) => {
          _setValue(e.target.value);
          if (onChange && typeof onChange === "function")
            onChange(e.target.value, e);
        }}
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
