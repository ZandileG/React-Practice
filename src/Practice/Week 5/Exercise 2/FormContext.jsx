/*Exercise 2:
Build a multi-step form (e.g., a registration form, Tinder signup form, etc.) where form data is shared across steps using Context.

Requirements:
Create a form with 3 steps: Personal Details, Address Details, and Confirmation.
Use Context to store and update form data as the user progresses through the steps.
Display a summary of the form data on the confirmation step.

Hints:
Create a FormContext to store form data and a function to update it.
Use useContext to access and update form data in each step.
Use useNavigate to navigate between steps.
*/

import React, { createContext, useEffect, useState} from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    //Use the solutions to see how to store form data
  })

  function updateForm(){
    setStoreData();
  }

  return (
    <FormContext.Provider value={{ storeData, updateForm}}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;