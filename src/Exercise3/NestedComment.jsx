/*Exercise 3: Nested Comment Component

Create a NestedComment component that can render comments with replies in a nested format. 
The component should accept a "comments" object with properties for the author, content, 
and an array of replies. Each reply should be structured similarly to the main comment object 
(i.e. it should have an author, content), allowing for multiple levels of nesting.

Task:
Create a new React component named NestedComment.
Use props to pass the comment data to the component, including nested replies. 
(You can create this comment object with nested replies, as stated above, to pass in as a prop).
Render the comments and their nested replies recursively (use one of the Array methods).
Style the component using an external CSS file to visually differentiate between comment levels.
*/

import { Fragment } from "react";

export default function NestedComment(props){
    const {author, content, replies} = props;
   
    return(
        <Fragment>
        <h1>{author}</h1>
        <h2>{content}</h2>
        <p>{replies}</p>
        </Fragment>
    );
}