import React from "react";

function User({name, age}) {

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default User;