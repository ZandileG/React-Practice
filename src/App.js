import "./App.css";
import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Netflix/Pages/Home";
import Login from "./Netflix/Pages/Login";
import Favourites from "./Netflix/Pages/Favourites";
import AuthProvider, {AuthContext} from "../src/Netflix/Context/AuthContext";

function ProtectedRoute({children}){
  const {isAuthenticated} = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to ={"/login"} />;
}

function App(){
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/login"element={<Login />} />
    <Route path="/favourites"element={<Favourites />} />
    <Route path="/"element={<ProtectedRoute><Home /></ProtectedRoute>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;