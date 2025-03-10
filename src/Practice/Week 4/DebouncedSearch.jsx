/*Exercise 2: Debounced Search Input

You are building a search feature for a large dataset (e.g. Netflix). 
To optimise performance, you want to debounce (Debouncing a function ensures that it doesn't get called too frequently.) 
The search input so that the API call is only made after the user has stopped typing for 500ms.

Task:
Create a search input field.
Use useEffect to debounce the input value.
Log the debounced value to the console (simulating an API call).

Hints:
Use useState to manage the input value.
Use useEffect to set up a debounce mechanism with setTimeout.
Clear the timeout on clean-up to avoid memory leaks.
*/

import React, { useState, useEffect, Fragment } from "react";

export default function DebouncedSearch(){
 
//Stores the value of the input field as the user types.
    const[inputValue, setInputValue] = useState("");

//Stores the debounced version of inputValue, updating after a delay.
    const[debouncedValue, setDebouncedValue] = useState("");


/*When inputValue changes, a timer (setTimeout) starts.
  After 500 milliseconds, debouncedValue updates with the latest inputValue.
  If the user types again before 500ms, the previous timer is cleared (clearTimeout), preventing unnecessary updates.*/
    useEffect(() => {
    const handler = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, 500);

      return () =>{
        clearTimeout(handler);
      };
    }, [inputValue]);

/*Whenever debouncedValue changes, a new effect runs.
  It logs "API call with: <value>", simulating an API request.*/
    useEffect(() =>{
      console.log("API call with:", debouncedValue);
    }, [debouncedValue]);

   return(
    <Fragment>
    <h1>Debounced Search Input</h1>

    <input type="text" value={inputValue} 
           onChange={(e) => setInputValue(e.target.value)} 
           placeholder="Search..."/>
    </Fragment>
    );
}