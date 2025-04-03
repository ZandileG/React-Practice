import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Logo from "../NetflixLogo.png";

function Navbar() {
  const {logout, isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout(){
    logout();
    navigate("/login");
  }

  return (
    <div className="navbar">
      <Link to ={"/"}><img src={Logo} /></Link>
      {isAuthenticated && <button onClick={handleLogout}>Sign Out</button>}
    </div>
  );
}

export default Navbar;