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

/*Solutions*/
import React  from "react";
import "./NestedComment.css";

export default function NestedComment({comment}){   
    return(
        <div className="comment">
        <p className="comment-author">{comment.author}</p>
        <p className="comment-content">{comment.content}</p>
        {comment.replies && comment.replies.length > 0 &&(
            <div className="comment-replies">
            {comment.replies.map((reply, index) =>(
                <NestedComment key={index} comment={reply} />
            ))}
            </div>
        )}
        </div>
    );
}