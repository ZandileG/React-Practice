/*Exercise Question 2: Fetching Data on Component Mount and Clean-up

Implement a component that fetches data from an API when the component mounts, and provides a clean-up mechanism to cancel the fetch if the component unmounts before the data is loaded.

Task:
Create a functional component UserProfile.jsx
Use the useEffect hook to make an API call to get the user's data (you can use https://jsonplaceholder.typicode.com/users/1 as a mock API).
Imagine the user closes the tab/component—ensure that the component unmounts before the data is fetched, the fetch is cancelled to prevent memory leaks.
Display the fetched user data, or a loading indicator if the data has not been loaded yet.
Hints:

JavaScript has an in-built method called AbortController for cases such as these (MDN linkLinks to an external site.).
Remember to try to handle potential errors in fetching data. 
*/ 

import React, { useState, useEffect, Fragment } from "react";

export default function UserProfile(){

 const[, set] = useState();

    useEffect(() => {


      return () =>{

      }
    }, []);

   return(
    <Fragment>
    <h1>User Profile</h1>



    </Fragment>
    );
}