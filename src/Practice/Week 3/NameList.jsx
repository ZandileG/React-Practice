/*Exercise Question 1: Rendering a List of Names

Create a React component called NameList.
Use the following array of names inside the component:
const names = ["Alice", "Bob", "Charlie", "Diana"];
Render the names as an unordered list (<ul>), with each name inside a separate <li> element.
Ensure each <li> has a unique key using the index of the array.
*/ 

import React from "react";

export default function NameList(){
    const people = [
        { name: "Alice", id: 1 }, 
        { name: "Bob", id: 2 }, 
        { name: "Charlie", id: 3 }, 
        { name: "Diana", id: 4 },
    ];

    const listItems = people.map(person =>
        <li key = {person.id}>{person.name}</li>
); 

    return(
        <ul>{listItems}</ul>
    );
}