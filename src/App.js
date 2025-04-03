import "./App.css";
import React, {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Practice/Week 6/Example/Pages/Home";
import Login from "./Practice/Week 6/Example/Pages/Login";
import Navbar from "./Practice/Week 6/Example/Components/Navbar";
import AuthProvider, {AuthContext} from "./Practice/Week 6/Example/Context/AuthContext";

function ProtectedRoute({children}){
  const {isAuthenticated} = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to ={"/login"} />;
}

function App(){
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/login"element={<Login />} />
    <Route path="/"element={<ProtectedRoute><Home /></ProtectedRoute>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;