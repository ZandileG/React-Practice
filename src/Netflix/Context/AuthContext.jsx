import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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