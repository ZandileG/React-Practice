import React, { useState, useEffect } from "react";

function Counter (){

    const[counter, setCounter] = useState(0);

    useEffect(() => {
      //code runs on mount
        console.log(`State has changed! Counter: ${counter}`);

  //code runs on update
    }, [counter]);

return(
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
);
}

export default Counter;