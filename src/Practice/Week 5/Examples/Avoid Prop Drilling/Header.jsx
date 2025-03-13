import React from "react";
import User from "./User";

function Header({name, age}) {

  return (
    <div>
      <h3>This portion has user information</h3>
      <User name={name} age={age}/>
    </div>
  );
}

export default Header;