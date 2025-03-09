/*Exercise 2: Image Component with Conditional Rendering

Create an ImageDisplay component that conditionally renders alternate text when the image fails to load. 
Add a CSS class for styling.

Task:
1. Create a new React component named ImageDisplay.
2. Use props to pass in the image URL and the alt text information in.
Hint: JavaScript has many built-in methods for events, including one for errors.
*/

import { Fragment } from "react";
import "./ImageDisplay.css"

export default function ImageDisplay(){

    const content = {
        imageUrl: "https://picsum.photos/200/300",
        altText: "The image was not able to load."
    }

   function imageError(e){
    /*This targets the element that triggered the event (e.target), which is the <img> element.
      It adds the hidden class to that element, effectively hiding it from view when an error occurs*/
        e.target.classList.add("hidden");

    /*This refers to the next sibling node in the DOM, which is the alt paragraph text. 
      The next sibling should be shown when the image fails to load.
      It removes the hidden class from that next sibling, making it visible.*/    
        e.target.nextSibling.classList.remove("hidden"); 
    }

    //The onError event is triggered if an error occurs while loading an external file.
    return(
        <Fragment>
        <h1>Image Display</h1>
        <img src = {content.imageUrl} alt={content.altText} onError={imageError} />
        <p className="error-text hidden">{content.altText}</p>
        </Fragment>
    );
}