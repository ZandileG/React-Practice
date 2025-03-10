/*Exercise 3: Auto-Save Form Data

You are building a form where users can input data. To improve the user experience, 
you want to implement an auto-save feature that saves the form data to local storage every 2 seconds after the user stops typing.

Task:
Create a form with a text input field.
Use useEffect to implement an auto-save feature that saves the input value and displays it in the console 
(if you want, you can learn about the use of local storage and save the values there).
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
    const[inputValue, setInputValue] = useState("");
   
       useEffect(() => {
      /*It checks if "autoSaveData" exists in localStorage.
        If found, it sets inputValue to the saved data.*/
        const savedValue = localStorage.getItem("autoSaveData");
        if (!savedValue) {;
        setInputValue(savedValue);
        }
      },[]);

    useEffect(() =>{
    /*Each time inputValue changes, a 2-second timer starts.
      If the user types again before 2 seconds, the timer resets.
      If the user stops typing for 2 seconds, inputValue is saved to localStorage.*/
      const handler = setTimeout(() => {
          localStorage.setItem("autoSaveData", inputValue);
          console.log("Data saved:", inputValue);
        }, 2000);

         return () =>{
          clearTimeout(handler);
         };
       }, [inputValue]);

    return(
    <Fragment>
    <h1>Auto Save Form</h1>
        <input type="text" value={inputValue} 
               onChange={(e) => setInputValue(e.target.value)}/>
        <p>Current Input: {inputValue}</p>
    </Fragment>
    );
}