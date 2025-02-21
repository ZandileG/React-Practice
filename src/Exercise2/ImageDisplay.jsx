/*Exercise 2: Image Component with Conditional Rendering

Create an ImageDisplay component that conditionally renders alternate text when the image fails to load. 
Add a CSS class for styling.

Task:
Create a new React component named ImageDisplay.
Use props to pass in the image URL and the alt text information in.
Hint: JavaScript has many built-in methods for events, including one for errors.
*/

import { Fragment } from "react";
import "./ImageDisplay.css"

export default function ImageDisplay(){

    const content = {
        imageUrl: "https://picsum.photos/200/300",
        altText: "The image was not able to load."
    }

   /* function imageError(){

    }*/

    return(
        <Fragment>
        <h1>Image Display</h1>
        <img src = {content.imageUrl} alt="Random Landscape" onerror="imageError()" />
        <p className="altText">{content.altText}</p>
        </Fragment>
    );

}