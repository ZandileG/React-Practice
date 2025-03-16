import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormProvider from "./Practice/Week 5/Exercise 2/FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <FormProvider>
      <App />
  </FormProvider>
  </React.StrictMode>
);

/*If you want to start measuring performance in your app, pass a function
  to log results (for example: reportWebVitals(console.log))
  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/
reportWebVitals();