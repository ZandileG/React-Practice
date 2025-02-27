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
        e.target.classList.add("hidden");
        e.target.nextSibling.classList.remove("hidden"); 
    }

    return(
        <Fragment>
        <h1>Image Display</h1>
        <img src = {content.imageUrl} alt={content.altText} onError={imageError} />
        <p className="error-text hidden">{content.altText}</p>
        </Fragment>
    );
}