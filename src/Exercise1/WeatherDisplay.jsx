/*Exercise 1: Weather Display Component with Conditional Rendering
Create a WeatherDisplay component that accepts props for temperature, 
condition (sunny, cloudy, rainy, etc.), and a boolean for whether it is day or night. 
The component should conditionally render messages based on the weather condition and time of day.

Task:
Create a new React component named WeatherDisplay and render it in your App.js.
Use props to pass the temperature, weather condition, and day/night boolean to the above-mentioned WeatherDisplay component.
Conditionally render different messages based on the provided props.
Style the component using inline styles or CSS-in-JS for dynamic styling based on conditions.
*/

import { Fragment } from "react";

export default function WeatherDisplay(props){
    const {temperature, condition, isDay} = props;
    const weather = {
        temperature: 25,
        condition: "Sunny",
        isDay: true,
    };

    return(
        <Fragment>
        <h1>{weather.temperature + "°C"}</h1>
        <h2>{weather.condition}</h2>
        <p>{weather.isDay}</p>
        </Fragment>
    );
}