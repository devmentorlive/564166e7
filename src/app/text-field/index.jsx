import React from "react";

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
