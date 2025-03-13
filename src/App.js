import "./App.css";
import React from "react";
import Login from "./Practice/Week 5/Examples/Example 2/Pages/Login";
import Dashboard from "./Practice/Week 5/Examples/Example 2/Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Login />} />
z   </Routes>
   </BrowserRouter>
  );
}

export default App;

/*import Navbar from "./Practice/Week 5/Examples/Components/Navbar";

import Home from "./Practice/Week 5/Examples/Pages/Home";
import About from "./Practice/Week 5/Examples/Pages/About";
import Products from "./Practice/Week 5/Examples/Pages/Products";
import Product from "./Practice/Week 5/Examples/Pages/Product";

import Login from "./Practice/Week 5/Examples/Pages/Login";
import Dashboard from "./Practice/Week 5/Examples/Pages/Dashboard";

import NotFoundPage from "./Practice/Week 5/Examples/Pages/NotFoundPage"; 

<BrowserRouter>
   <Navbar />
   <Routes>
    //when this url is visited, what page would you like to see. 
    //This is because in react, we don't have pages but we have components
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
   
    <Route path="/products/:productId" element={<Product />} />

   //This is a catch-all for any routes that have not been specified
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </BrowserRouter>
*/