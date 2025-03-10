/*Exercise 3: Auto-Save Form Data
You are building a form where users can input data. To improve the user experience, you want to implement an auto-save feature that saves the form data to local storage every 2 seconds after the user stops typing.

Task:
Create a form with a text input field.
Use useEffect to implement an auto-save feature that saves the input value and displays it in the console (if you want, you can learn about the use of local storage and save the values there).
Use debouncing to ensure the save operation only occurs after the user has stopped typing for 2 seconds.
Optional: Load the saved data from local storage when the component mounts.
Hints:

Use useState to manage the input value.
Use useEffect to implement the debounced auto-save functionality.
Use useEffect to load the saved data from local storage when the component mounts.
Clean up the debounce timer in the useEffect clean-up function.
*/

import React, { useState, useEffect, Fragment } from "react";

export default function AutoSaveForm(){
   
    const[, set] = useState();
   
       useEffect(() => {
   
   
         return () =>{
   
         }
       }, []);

    return(
    <Fragment>
    <h1>Auto Save Form</h1>



    </Fragment>
    );
}