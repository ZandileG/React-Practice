//Creating and nesting components
function MyButton(){
    return(
        <button>I'm a button</button>
    );
}

export default function MyApp(){
    return (
        <div>
        <h1>Welcome to my app</h1>
        <MyButton /> 
        </div>
    );
}

//Displaying data
const user = {
    name: "Zandile Gebuza",
    imageUrl: "image.png",
    imageSize: 90,
};

export default function Profile(){
    return(
        <>
        <h1>{user.name}</h1>
        <img
          className = "avatar"
          src = {user.imageUrl}
          alt = {"Photo of" + user.name}
          style = {{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        </>
    );
}

//Conditional rendering
let content;

if (isLoggedIn){
    content = <AdminPanel />;
} else{
    content = <LoginForm />;
}
return(
  <div>
    {content}
  </div>  
);

/*ES6 syntax
<div> {
    isLoggedIn ? ( <AdminPanel /> ):( <LoginForm /> )
} </div>

Without else
<div> {
    isLoggedIn && <AdminPanel />
    } </div>*/

//Rendering lists
const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList(){
const listItems = products.map(function product (){
    <li 
        key = {product.id}
        style = {{
        //if it's a fruit its text colour will be magenta, if not, it will be dark green
            color: product.isFruit ? "magenta" : "darkgreen"
        }}>
        {product.title}
    </li>}
);

return(
    <ul>{listItems}</ul>
);
}

//Responding to events
function MyButton(){
    function handleClick(){
        alert("You clicked me!");
    }
    return(
        <button onClick = {handleClick}>
            Click Me
        </button>
    );
}

//Updating the screen
//Count the number of times a button is clicked by adding a state to your component.
import { useState } from "react";

export default function MyApp(){
    return (
    <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
    </div>
    );
}

//Declare a state variable
function MyButton(){
    const [count, setCount] = useState (0);

//Clicking the button will increment the counter
    function handleClick(){
        setCount(count + 1);
    }

    return(
        <button onClick = {handleClick}>
            Clicked {count} times
        </button>
    );
}

//Sharing data between components
import { useState } from "react";

export default function MyApp(){
    const [count, setCount] = useState (0);
    function handleClick(){
        setCount(count + 1);
    }

    return(
       <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
       </div>
    );
}

function MyButton({ count, onClick }){
    return(
        <button onClick = {onClick}>
            Clicked {count} times
        </button>
    );
}

/*{()=> setCount(count - 1)} */