import React from "react";
import Navbar from "./components/navbar";
import Search from "./components/search";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Search />;
    </Router>
  );
}

export default App;
