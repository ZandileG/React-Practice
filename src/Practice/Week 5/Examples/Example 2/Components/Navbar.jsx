import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{background: theme === "light" ? "white" : "black", 
                 color: theme === "light" ? "black" : "white"}}>
      <h1>Navbar</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Navbar;