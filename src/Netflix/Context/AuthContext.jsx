import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const AuthToken = localStorage.getItem("isAuthenticated");
    return AuthToken === "true";
  });

  useEffect(()=>{
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  function login(username, password){
    if (username === "admin" && password === "netflix"){
    setIsAuthenticated(true)
    return true;
    } else{
      return false;
    }
  }
  
  function logout(){
    setIsAuthenticated(false);
  }

  return (
  <AuthContext.Provider value={{login, logout, isAuthenticated}}>
    {children}
  </AuthContext.Provider>
  );
}

export default AuthProvider;