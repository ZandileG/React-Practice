import React, { useEffect, useState } from "react";

function FetchData() {

const [users, setUsers] = useState([]);

useEffect(() => {
//When the component is first mounted, we have an API fetch and we're updating state immediately
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);

    return(
    <div>
    <h1>User List</h1>
    <ul>
        {/*This is a jsx expression*/ 
           users.map(user => (<li key={user.id}>{user.name}</li>))
        }
    </ul>
    </div>
    );
}

export default FetchData;