import "./App.css";
import React, {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Practice/Week 6/Example/Pages/Home";
import Login from "./Practice/Week 6/Example/Pages/Login";
import Navbar from "./Practice/Week 6/Example/Components/Navbar";
import AuthProvider, {AuthContext} from "./Practice/Week 6/Example/Context/AuthContext";

function ProtectedRoute(){
  const {isAuthenticated} = useContext(AuthContext);
  return isAuthenticated ? <Home /> : <Login />;
}

function App(){
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/login"element={<Login />} />
    <Route path="/"element={<Home />} />
    <Route path="/"element={<Navbar />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;