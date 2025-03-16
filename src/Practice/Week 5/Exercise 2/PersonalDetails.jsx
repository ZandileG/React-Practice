import React from "react";
import { useNavigate } from "react-router-dom";

function PersonalDetails() {
const navigate = useNavigate();

function handleNext(){
    navigate("/address");
}

  return (
    <div>
      <h1>Personal Details</h1>

      <label>Name: </label>
      <input type="text" />

      <label>Surname: </label>
      <input type="text" />

      <label>Age: </label>
      <input type="text" />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalDetails;