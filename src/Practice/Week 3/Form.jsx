import React, { useState } from "react";

function Form() {
  const [details, setDetails] = useState({ username: "", email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
  }

  function updateDetails(e) {
    const { name, value } = e.target;

  /*prevData is the prvious state of details
    ...prevData keeps previous values
    [name]: value updates the name property with value*/
    setDetails((prevData) => ({ ...prevData, [name]: value }));
    console.log(details);
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input type="text" onChange={updateDetails} name="username" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;