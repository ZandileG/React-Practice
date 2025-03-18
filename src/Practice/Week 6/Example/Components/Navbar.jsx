import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout(){
    logout();
    navigate("/login");
  }

  return (
    <div>
      <h1>Navbar</h1>
      <Link>Netflix</Link>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Navbar;