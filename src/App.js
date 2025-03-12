import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Practice/Week 5/Examples/Components/Navbar";

import Home from "./Practice/Week 5/Examples/Pages/Home";
import About from "./Practice/Week 5/Examples/Pages/About";
import Products from "./Practice/Week 5/Examples/Pages/Products";
import NotFoundPage from "./Practice/Week 5/Examples/Pages/NotFoundPage.jsx";

function App(){
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    {/*when this url is visited, what page would you like to see. 
    This is because in react, we don't have pages but we have components*/}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
   
   {/*This is a catch-all for any routes that have not been specified*/}
    <Route path="*" element={<NotFoundPage />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;