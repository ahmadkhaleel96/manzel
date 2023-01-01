import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}

export default App;
