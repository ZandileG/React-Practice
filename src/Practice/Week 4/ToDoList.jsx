/*Exercise Question 1: To Do List

Create a To-do List app that allows users to add items to a list and mark them as completed. 
Use the useState hook to manage the state of the to-do list. This exercise only uses the useState hook

Task:
Input field for adding new to-dos
Button to submit the new to-do
Display a list of to-dos
Each to-do should have a button or checkbox to mark it as completed
When marked completed, the to-do item should visually indicate its status (e.g. strike-though text)
*/ 

import React, { Fragment, useState } from "react";

export default function ToDoList(){

    const[items, setItems] = useState([]);
    const[item, setItem] = useState("");

    const updateInfo = (e) =>{
        setItem(e.target.value);
    }

    const addItem = () =>{
        if (item.trim()!==""){

          //Add a new item as an object with "text" and "done" properties
            setItems([...items, {text: item, done: false}]);
            setItem("");
        }
    };

    const itemDone = (index) =>{
  //Create a copy of the items array
    const updatedItems = [...items];

  //Toggle the "done" property of the item at the given index
    updatedItems[index].done = !updatedItems[index].done;
     setItems(updatedItems);
    }

   return(
    <Fragment>
    <h1>To-Do List</h1>

    <ul>
        {items.map((item, index)=>(
        <li key={index} 
            style={{textDecoration: item.done? "line-through" : "none"}}>
        {item.text}

        <button type="button" onClick={() => itemDone(index)} 
            style={{marginLeft: "10px"}}>{item.done ? "Undo" : "Done"}</button>
        </li>
    ))}   
    </ul>

    <input type="text" value={item} onChange={updateInfo} />
    <button type="button" onClick={addItem}>Add Item</button>
    </Fragment>
    );
}