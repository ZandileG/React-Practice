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

    const[tasks, setTasks] = useState([]);
    const[task, setTask] = useState("");

    const updateInfo = (e) =>{
        setTask(e.target.value);
    };

    const addTask = ()=>{
        if (task.trim()!==""){
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    return(
        <Fragment>
        <h1>Task List</h1>
        <ul>
            {tasks.map((task, index)=>(
            <li key={index}>{task}</li>
        ))}
        </ul>

        <input type="text" value={task} onChange={updateInfo} />
        <button type="button" onClick={addTask}>Add Task</button>
        </Fragment>    
        );
}