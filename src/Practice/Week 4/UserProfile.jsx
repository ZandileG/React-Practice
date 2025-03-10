/*Exercise Question 2: Fetching Data on Component Mount and Clean-up

Implement a component that fetches data from an API when the component mounts, 
and provides a clean-up mechanism to cancel the fetch if the component unmounts before the data is loaded.

Task:
Create a functional component UserProfile.jsx
Use the useEffect hook to make an API call to get the user's data 
(you can use https://jsonplaceholder.typicode.com/users/1 as a mock API).
Imagine the user closes the tab/component—ensure that the component unmounts 
before the data is fetched, the fetch is cancelled to prevent memory leaks.
Display the fetched user data, or a loading indicator if the data has not been loaded yet.
Hints:

JavaScript has an in-built method called AbortController for cases such as these.
Remember to try to handle potential errors in fetching data. 
*/ 

import React, { useState, useEffect, Fragment } from "react";

export default function UserProfile(){

//Tracks whether the data is being fetched, initially there is no value
 const[loading, setLoading] = useState(null);

//Stores any errors that occur during the fetch request, initially there is no value
 const[err, setErr] = useState(null);

 const[userData, setUserData] = useState(null);

    useEffect(() => {

    //Creates an AbortController to allow fetch request cancellation if the component unmounts
      const controller = new AbortController();
      const signal = controller.signal;

    /*An async function automatically returns a Promise, even if it doesn't explicitly return one.
      The await keyword pauses the execution of the function until the Promise resolves or rejects, 
      making asynchronous code look more like synchronous code.*/
      async function fetchUserData(){
        try{
          setLoading(true);
          const response = await fetch ("https://jsonplaceholder.typicode.com/users/1", {signal});

        //Throws an error if the response is not ok
          if (!response.ok){
            throw new Error(`HTTP Error.Status: ${response.status}`);
          }

        //Updates userData with the API response
          const data = await response.json();
          setUserData(data);
          setLoading(false);
        } 
        
      /*Catches and handles errors if the error is due to an aborted request, it logs a message.
        Otherwise, it updates err with the error message.*/
        catch (error){
          if (error.name === "AbortError"){
            console.log("Fetch Aborted");
          } else{
            setErr(error.message);
            setLoading(false);
          }
        }
      }

    //Calls the function
      fetchUserData();

    //Cleans up by aborting the request when the component unmounts
      return () => {
        controller.abort();
      };
    }, []);

//Conditional rendering
//If loading is true, Loading displays
    if(loading){
      return <h1>Loading...</h1>;
    }

//If err exists, the error message displays
    if (err){
      return <h1>Error: {err}</h1>;
    }

   return(
    <Fragment>
    <h1>User Profile</h1>

    {userData &&(
    <section>
    <h3>{userData.name}</h3>
    <p>{userData.email}</p>
    <p>{userData.phone}</p>
    </section>
    )}
    </Fragment>
    );
}