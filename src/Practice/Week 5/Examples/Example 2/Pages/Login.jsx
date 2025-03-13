import React, { useContext, useState} from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
     const [username, setUsername] = useState();
     const {login} = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();

        if (username.trim()){
            login(username);
            navigate("/dashboard");
        };
    }

  return (
    <div>
       <h1>Login</h1>

    <form onSubmit={handleLogin}>
    <input type="text" 
            placeholder="Enter your username" 
            onChange={(e) => setUsername(e.target.value)}
            required/>
    <button type="submit" onClick={login}>Login</button>
    </form>
    </div>
  );
}

export default Login;