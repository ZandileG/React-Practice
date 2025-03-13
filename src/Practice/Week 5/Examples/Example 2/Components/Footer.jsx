import React, { useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext';

function Footer() {
const {theme} = useContext(ThemeContext);

  return (
    <div style={{background: theme === "light" ? "white" : "black", 
                 color: theme === "light" ? "black" : "white"}}>
      <p>Footer</p>
    </div>
  )
}

export default Footer;