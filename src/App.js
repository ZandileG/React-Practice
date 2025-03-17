import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "./Practice/Week 6/Exercise 3/Grid";

function App(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Grid />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;