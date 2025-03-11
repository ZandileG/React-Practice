/*Exercise 3: Nested Comment Component

Create a NestedComment component that can render comments with replies in a nested format. 
The component should accept a "comments" object with properties for the author, content, 
and an array of replies. Each reply should be structured similarly to the main comment object 
(i.e. it should have an author, content), allowing for multiple levels of nesting.

Task:
1. Create a new React component named NestedComment.
2. Use props to pass the comment data to the component, including nested replies. 
(You can create this comment object with nested replies, as stated above, to pass in as a prop).
3. Render the comments and their nested replies recursively (use one of the Array methods).
4. Style the component using an external CSS file to visually differentiate between comment levels.
*/

import React  from "react";
import "./NestedComment.css";

//Solution
export default function NestedComment({comment}){   
    
    <h1>Nested Comments</h1> 

/*Line 29: The component checks if "comment" has any replies. If there are (comment.replies.length > 0) 
           a new div with the class "comment-replies" is rendered.

 Line 36: The map() function is used to loop over the replies array and for each reply, it renders another
          "NestedComment" component recursively, passing the individual reply object as a prop.
          each NestedComment can render another NestedComment inside itself, allowing for a potentially 
          infinite depth of nested comments.*/
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

/*App.js

import React from "react"; 
import NestedComment from "./NestedComment"; 
 
export default function App() { 
commentsData: commentsData is an object that represents a comment thread with nested replies. It has:
A main comment with the author "Alice" and content "This is the main comment."

Two replies to Alice's comment:
One from Bob, with another reply from Charlie.
Another direct reply from Eve to Alice.
Each comment can have a replies array, which can be empty or contain more nested comments.
  
    const commentsData = { 
    author: "Alice", 
    content: "This is the main comment.", 
    replies: [ 
      { 
        author: "Bob", 
        content: "This is a reply to Alice.", 
        replies: [ 
          { 
            author: "Charlie", 
            content: "This is a reply to Bob.", 
            replies: [ 
              { 
                author: "David", 
                content: "This is a reply to Charlie.", 
                replies: [], 
              }, 
            ], 
          }, 
        ], 
      }, 
      { 
        author: "Eve", 
        content: "Another direct reply to Alice.", 
        replies: [], 
      }, 
    ], 
  }; 
 
Rendering NestedComment: The commentsData object is passed as a prop to the NestedComment component 
which initiates the rendering of the main comment and its nested replies.
  return( 
    <div> 
      <NestedComment comment={commentsData} /> 
    </div> 
  ); 
}*/