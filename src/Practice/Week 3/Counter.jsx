import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>

      
      <button onClick={
     /*If you wrote onClick={setCount(count - 1)}, it would execute immediately instead of waiting for a click.
      Using () => ensures it only runs when the button is clicked.*/
        () => setCount(count - 1)}>Decrement</button>
        
      <button onClick={
      //If the function does not need arguments and is already defined, just pass its name.
        handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;