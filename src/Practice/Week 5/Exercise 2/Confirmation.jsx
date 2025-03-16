import React, { Fragment} from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
const navigate = useNavigate();

function handleSubmit(){
  alert("You have successfully submitted the form!");
  navigate("/");
}
    
  return (
    <Fragment>
      <h1>Confirmation</h1>  
      <button onClick={handleSubmit}>Submit</button>
    </Fragment>
  );
}

export default Confirmation;