/*Exercise Question 2: Simple Input Form

1. Create a React component called SimpleForm.
2. Add an input field and a submit button to the form.
3. When the user types in the input field, update the state to reflect the current value of the input.
4. When the form is submitted, display an alert with the entered value, and clear the input field.
5. Use useState to manage the input value.
*/

import { Fragment, useState } from "react";

export default function SimpleForm(){

    const [info, setInfo] = useState ("");

    const updateInfo = (e) =>{
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