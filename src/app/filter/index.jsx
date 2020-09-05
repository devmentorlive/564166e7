import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Filter({ render, placeholder }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
      {render(query)}
    </div>
  );
}

Filter.propTypes = {
  placeholder: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
