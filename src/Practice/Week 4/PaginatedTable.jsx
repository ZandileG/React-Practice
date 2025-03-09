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
You can use the API URL (https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10) which limits the data response to 10 entries. *consider the 'page' variable in the API URL. 
*/ 

import React, { useEffect, Fragment } from "react";

export default function PaginatedTable(){



   return(
    <Fragment>
    <h1>Paginated Table</h1>



    </Fragment>
    );
}