import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

function login(username){
    setUser(username);
}

function logout(){
    setUser(null);
}

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;