/*Exercise 1: Fetching Data with Pagination
You are building a table component that fetches data from an API. The API supports pagination, and you want to fetch new data whenever the user changes the page 
(this is a standard feature in applications that display large datasets, like dashboards, e-commerce product lists, or admin panels).

Task:
Create a table component with pagination controls (e.g., "Next" and "Previous" buttons).
Use useEffect to fetch data from an API whenever the page changes.
Display the fetched data in the table.
Handle loading and error states.

Hints:
Use useState to manage the current page and the fetched data.
Use useEffect to fetch data when the page changes.
You can use the API URL (https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10) which limits the data response to 10 entries. 
*consider the "page" variable in the API URL. 
*/ 

import React, { useState, useEffect, Fragment } from "react";

export default function PaginatedTable(){

 const[data, setData] = useState([]);
 const[page, setPage] = useState(1);
 const[loading, setLoading] = useState(false);
 const[error, setError] = useState(null);

    useEffect(() => {
/*Sets loading to true and clears any previous errors.
  Makes an API request to jsonplaceholder.typicode.com to fetch posts, limited to 10 per page.
  If the request is successful, updates data with the fetched posts.
  If there's an error, updates error. Finally, sets loading to false.*/
      const fetchData = async () =>{
        setLoading(true);
        setError(null);

        try{
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
          );

          if(!response.ok) throw new Error("Failed to fetch data");
          
          const result = await response.json();
          setData(result);
        } catch (err){
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
  }, [page]);

   return(
    <Fragment>
    <h1>Paginated Table</h1>

    <table>
    <thead>
      <tr><th>Id</th><th>Title</th></tr>
    </thead>

    <tbody>
    {data.map((item) =>(
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
      </tr>
    ))}
      </tbody>
    </table>

    <div>
    <button onClick={/*"Previous" button: Decreases page by 1.Disabled if page === 1 (to prevent negative pages).
                       "Next" button: Increases page by 1.*/
      () => setPage((prev) => Math.max(prev -1, 1))} 
            disabled={page === 1}>Previous</button>

    <span>Page {page}</span>
    <button onClick={()=> setPage((prev) => prev + 1)}>Next</button>
    </div>

    {/*Displays "Loading..." when fetching data.
       Displays an error message in red if the request fails.*/
      
    loading && <p>Loading...</p>}
    {error && <p style={{color: "red"}}>{error}</p>}
    </Fragment>
    );
}