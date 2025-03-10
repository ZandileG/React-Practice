import React, { useState } from "react";
import "./Darkmode.css";

function Darkmode() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={darkmode ? "darkmodeTrue" : "darkmodeFalse"}>
      <h1>YouTube</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quas
        ut sit saepe delectus iure laboriosam ipsam mollitia dolore nulla! Quia
        iste distinctio eaque ex molestias unde dolorum deserunt consequuntur?
      </p>
      <button onClick={
      //This flips the current darkmode value (true → false, false → true).
        () => setDarkmode(!darkmode)}>Toggle Darkmode</button>
    </div>
  );
}

export default Darkmode;
