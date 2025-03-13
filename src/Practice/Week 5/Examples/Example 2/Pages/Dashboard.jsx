import React, {useContext} from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const {user, logout} = useContext(UserContext);
    const navigate = useNavigate();
  return (
    <div>
     <h1>Dashboard</h1>
     {user ? (
     <div>
        <p>Welcome, {user}</p>
        <button onClick={logout}>Logout</button>
    </div> 
     ) : (
     <div>
        <h1>Please log in to access your dashboard</h1>
        <button onClick={() => navigate("/login")}>Login</button>
    </div>
    )}
    </div>
  )
}

export default Dashboard;
