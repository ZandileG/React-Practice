import React, { useContext} from "react";
import { SettingsContext } from "./SettingsContext";

function Navbar() {
  const {theme, toggleTheme} = useContext(SettingsContext);

  return (
    <section style={{background: theme === "light" ? "white" : "black", 
                     color: theme === "light" ? "black" : "white"}}>
      
    <h1>Navbar</h1>

    <button onClick={toggleTheme}>Toggle Theme</button>
    </section>
  );
}

export default Navbar;