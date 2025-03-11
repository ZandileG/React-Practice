/*Exercise Question 2: Simple Input Form

1. Create a React component called SimpleForm.
2. Add an input field and a submit button to the form.
3. When the user types in the input field, update the state to reflect the current value of the input.
4. When the form is submitted, display an alert with the entered value, and clear the input field.
5. Use useState to manage the input value.
*/

import React, { Fragment, useState } from "react";

//Solution
export default function SimpleForm(){

/*info is the state variable that will hold the current value of the text input field.
  setInfo is the function used to update the info state.
  useSate("") initialises the info state with an empty string.*/
    const [info, setInfo] = useState ("");

//This function is used to update the state info whenever the user types in the input field.
    const updateInfo = (e) =>{
        
      //This updates the info state with the value the user typed
        setInfo (e.target.value);
    };

    const handleClick = (e) =>{
        e.preventDefault();
        alert(`You entered ${info}`);
        setInfo("");
    };

    return(
    <Fragment>
        <h1>Simple Form</h1>
        <form onSubmit={handleClick}>
        <input type="text" value={info} onChange={updateInfo} name="name" />
        <button type="submit">Submit</button>
        </form>
    </Fragment>
    );
}