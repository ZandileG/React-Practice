/*Exercise Question 1: Rendering a List of Names

1. Create a React component called NameList.
2. Use the following array of names inside the component:
3. const names = ["Alice", "Bob", "Charlie", "Diana"];
4. Render the names as an unordered list (<ul>), with each name inside a separate <li> element.
5. Ensure each <li> has a unique key using the index of the array.
*/ 

import React from "react";
import { Fragment } from "react";

export default function NameList(){
    const names = ["Alice", "Bob", "Charlie", "Diana"];

    const listItems = names.map((name, index) =>
        <li key = {index}>{name}</li>
); 

    return(
        <Fragment>
        <h1>Name List</h1>
        <ul>{listItems}</ul>
        </Fragment>
    );
}