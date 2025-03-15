import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Practice/Week 5/Exercise 1/ProductList";
import ProductDetails from "./Practice/Week 5/Exercise 1/ProductDetails";
import NotFoundPage from "./Practice/Week 5/Examples/Example 1/Pages/NotFoundPage"

function App(){
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="*" element={<NotFoundPage />} />
z   </Routes>
   </BrowserRouter>
  );
}

export default App;