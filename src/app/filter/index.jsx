import React, { useState } from "react";

import TextField from "../text-field";

export default function Filter({ render, placeholder }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <TextField
        value={query}
        onChange={(val) => setQuery(val)}
        placeholder={placeholder}
      />
      {render(query)}
    </div>
  );
}
