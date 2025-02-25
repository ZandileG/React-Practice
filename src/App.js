import "./App.css";
import React from "react";
/*import WeatherDisplay from "./Exercise1/WeatherDisplay";*/
/*import ImageDisplay from "./Exercise2/ImageDisplay";*/
import NestedComment from "./Exercise3/NestedComment";

export default function App() {

  const commentsData ={
    author: "Author 1",
    content: "Comment",
    replies: [
    {
    author: "Author 2",
    content: "",
    replies: [
    {
    author: "Author 3",
    content: "Comment",
    replies: [
    {
    author: "Author 4",
    content: "Comment",
    replies: [],
  },
],
  },
],
  },
  {
    author: "Author 5",
    content: "Comment",
    replies: [],
  },
],
  };

  return (
    <div className="App">
      <h1>Nested Comment</h1>
      <NestedComment comment={commentsData}/>
    </div>
  );
}