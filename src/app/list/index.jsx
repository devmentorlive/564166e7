import React from "react";

export default function List({ items, id, render }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item[id]}>{render(item)}</li>
      ))}
    </ul>
  );
}
