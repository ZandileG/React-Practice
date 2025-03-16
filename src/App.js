import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PersonalDetails from "./Practice/Week 5/Exercise 2/PersonalDetails";
import AddressDetails from "./Practice/Week 5/Exercise 2/AddressDetails";
import Confirmation from "./Practice/Week 5/Exercise 2/Confirmation";
import NotFoundPage from "./Practice/Week 5/Examples/Example 1/Pages/NotFoundPage"

function App(){
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<PersonalDetails />} />
    <Route path="/address" element={<AddressDetails />} />
    <Route path="/confirmation" element={<Confirmation />} />
    <Route path="*" element={<NotFoundPage />} />
z   </Routes>
   </BrowserRouter>
  );
}

export default App;