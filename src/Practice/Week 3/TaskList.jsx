/*Exercise Question 3: Task List with Dynamic Entries

1. Create a React component called TaskList.
2. Add an input field and a button.
3. Allow users to type in a task and click the button to add the task to a list.
4. Render the list of tasks dynamically, and ensure each task has a unique key based on its index.
5. Style the tasks with a border, padding, and margin for better visual separation.
6. You can take this example further by ensuring that the input box is cleared whenever a new task is added, and also adding 'edit' and 'delete' buttons to each task as well as their corresponding functionality.
*/

import React, { Fragment, useState } from "react";

//Solution
export default function TaskList(){

/*This initialises the tasks state variable as an empty array. 
  This state will hold the list of tasks entered by the user.*/
    const[tasks, setTasks] = useState([]);
    const[task, setTask] = useState("");

//Tracks which task is being edited
    const[editIndex, setEditIndex] = useState(null);

    const updateInfo = (e) =>{
        setTask(e.target.value);
    };

//The addTask function adds the current task to the list of tasks when the button is clicked.
    const addTask = ()=>{

//If the task is not just empty spaces, adds the task to the tasks array.
        if (task.trim()!==""){
            setTasks([...tasks, task]);
            
        //The input field is cleared
            setTask("");
        }
    };

//Set the task value and update the task at the given index
    const editTask = (index)=>{
    //Set the current task to be edited

    //Set the task index to indicate it's being edited
        setEditIndex(index);
    }

const saveEditedTask = () =>{
    const updatedTasks = [...tasks];

 //Replace the task at the editIndexwith the new task
    updatedTasks[editIndex] = task;

 //Update the tasks state with the modified task list
    setTasks(updatedTasks);

  //Clear the input field
    setTask(""); 

 //Reset edit mode
    setEditIndex(null);
}

    const deleteTask = (index)=>{
        //Removes task at the specified index
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return(
        <Fragment>
        <h1>Task List</h1>
        <ul>
            {tasks.map((task, index)=>(
            <li key={index} style={{
                border: "1px solid", 
                padding: "5px", 
                margin: "5px"}}>
            {task}
            <button type="button" onClick={() => editTask(index)} style={{marginLeft: "10px"}}>✏️</button>
            <button type="button" onClick={() => deleteTask(index)} style={{marginLeft: "10px"}}>❌</button>
            </li>
        ))}
        </ul>

        <input type="text" value={task} onChange={updateInfo} />
        <button type="button" onClick={editIndex !== null ? saveEditedTask : addTask}>{editIndex !== null ? "Save Task" : "Add Task"}</button>
        </Fragment>    
        );
}