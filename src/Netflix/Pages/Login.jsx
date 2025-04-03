import React, { useContext, useState } from "react";
import {AuthContext}  from "../Context/AuthContext";
import {useNavigate}  from "react-router-dom";
import "../../index.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

function handleLogin(){
  if (login(username, password)){
    navigate("/");
  } else{
    setError("Invalid credentials. Please try again.");
  }
}

  return (
    <div className="login">
      <h1>Sign In</h1>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      <button onClick={handleLogin}>Sign In</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;