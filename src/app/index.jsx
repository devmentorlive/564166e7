import React from "react";

import "./styles.css";

import screencasts from "../data/screencasts.json";
import List from "./list";

export default function App() {
  return <List items={screencasts} />;
}
