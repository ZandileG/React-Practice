import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
  return (
    <nav className="navBar">
      <div className="logo">Netflix</div>
      <ul className="navLinks">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;