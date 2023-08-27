import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout";
import List from "./Pages/List";

function App() {
  return <Layout children={<List />} />;
}

export default App;
