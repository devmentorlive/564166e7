import React from "react";

import "./styles.css";

import screencasts from "../data/screencasts.json";
import List from "./list";
import Screencast from "./screencast";

export default function App() {
  return (
    <List
      items={screencasts}
      id='ext_id'
      render={(screencast) => (
        <Screencast
          ext_id={screencast.ext_id}
          title={screencast.title}
        />
      )}
    />
  );
}
