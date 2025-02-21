import "./App.css";
import React from "react";
/*import WeatherDisplay from "./Exercise1/WeatherDisplay";*/
/*import ImageDisplay from "./Exercise2/ImageDisplay";*/
import NestedComment from "./Exercise3/NestedComment";

export default function App() {

  const commentsData ={
    author: "",
    content: "",
    replies: [
    {
    author: "",
    content: "",
    replies: [
    {
    author: "",
    content: "",
    replies: [
    {
    author: "",
    content: "",
    replies: [],
  },
],
  },
],
  },
  {
    author: "",
    content: "",
    replies: [],
  },
],
  };

  return (
    <div className="App">
      <NestedComment comment={commentsData}/>
    </div>
  );
}