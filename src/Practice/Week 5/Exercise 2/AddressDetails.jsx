import React from "react";
import { useNavigate } from "react-router-dom";

function AddressDetails() {
const navigate = useNavigate();

function handleNext(){
    navigate("/confirmation");
}

  return (
    <div>
      <h1>Address Details</h1>

      <label>House Number: </label>
      <input type="text" />

      <label>Street Name: </label>
      <input type="text" />

      <label>Town/City: </label>
      <input type="text" />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default AddressDetails;