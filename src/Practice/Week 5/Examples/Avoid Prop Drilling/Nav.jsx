import React from "react";
import Header from "./Header";

function Nav() {
const user = {
    name:"Jane Doe",
    age: 32,
};

  return (
    <div>
      <h1>YouTube Navigation</h1>
      <Header name={user.name} age={user.age}/>
    </div>
  )
}

export default Nav;
