import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Logo from "../NetflixLogo.png";
import "../../index.css"

function Navbar({onSearch}) {
  const {logout, isAuthenticated} = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

function handleSearch(e){
  setSearch(e.target.value);
  onSearch(e.target.value);
}

  function handleLogout(){
    logout();
    navigate("/login");
  }

  return (
    <div className="navbar">
      <Link to ={"/"}><img src={Logo} alt="Netflix Logo"/></Link>
      <input placeholder="Search..." type="text" onChange={handleSearch}/>
      {isAuthenticated && <button onClick={handleLogout}>Sign Out</button>}
    </div>
  );
}

export default Navbar;