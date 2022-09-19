import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
// import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header></header>
      <main></main>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
