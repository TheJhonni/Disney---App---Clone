import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/header/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
