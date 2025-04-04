import React, {useContext, useState, useEffect} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Logo from "../NetflixLogo.png";
import "../../index.css"

function Navbar({onSearch}) {
  const {logout, isAuthenticated} = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [isBackHome, setBackHome] = useState(false); //Tracks the current page
  const navigate = useNavigate();
  const location = useLocation(); //Gets the current route

  useEffect(() => {
    //Automatically updates isBackHome based on route
    if (location.pathname === "/favourites") {
      setBackHome(true);
    } else {
      setBackHome(false);
    }
  }, [location]);

function handleSearch(e){
  setSearch(e.target.value);
  onSearch(e.target.value);
}

  function handleLogout(){
    logout();
    navigate("/login");
  }

  function openFavourites(){
      navigate("/favourites");
      setBackHome(true);
  }

  function handleBack(){
    navigate("/");
  }

  return (
    <div className="navbar">
      <Link to ={"/"}><img src={Logo} alt="Netflix Logo"/></Link>
      <div>
      <button className="favourites" onClick={openFavourites} style={{display: isBackHome? "none" : "inline-block"}}>Favourites</button>
      <button className="home" onClick={handleBack} style={{display: isBackHome? "inline-block" : "none"}}>Back</button>
      <input placeholder="Search..." type="text" onChange={handleSearch}/>
      </div>
      {isAuthenticated && <button onClick={handleLogout}>Sign Out</button>}
    </div>
  );
}

export default Navbar;