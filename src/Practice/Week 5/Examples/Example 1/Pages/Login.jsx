import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();

function handleLogin(){
    //if the user exists in the databse, log them in
    navigate("/dashboard");
}

  return (
    <div>
      <h2>Please Login</h2>

      <label>Username </label>
      <input type="text" />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;