/*Exercise 2: Image Component with Conditional Rendering

Create an ImageDisplay component that conditionally renders alternate text when the image fails to load. 
Add a CSS class for styling.

Task:
Create a new React component named ImageDisplay.
Use props to pass in the image URL and the alt text information in.
Hint: JavaScript has many built-in methods for events, including one for errors.
*/

import { Fragment } from "react";

export default function ImageDisplay(props){
    const {imageUrl, altText} = props;

    return(
        <Fragment>
        <img src = {imageUrl} alt = {altText} />
        </Fragment>
    );
}