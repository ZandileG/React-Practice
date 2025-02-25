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

export default function WeatherDisplay(){
    const weather = {
        temperature: 25  +"ºC",
        condition: "Snowy",
        isDay: false,
    };

    const weatherMessage = function (){
        if (weather.condition === "Sunny"){
            return weather.isDay ? "It's a sunny day!" 
                         : "The night sky is clear.";
        } else if(weather.condition === "Cloudy"){
            return weather.isDay ? "It's a cloudy day."
                         : "It's a cloudy night."
        } else if (weather.condition === "Rainy"){
            return weather.isDay ? "It's a rainy day."
                         : "It's a rainy night."
        } else if (weather.condition === "Snowy"){
            return weather.isDay ? "It's a snowy day."
                         : "It's a snowy night."
        } else{
            return "The weather is unusual.";
        }
    };

    return(
        <Fragment>
        <h1>Weather Display</h1>
        <h2>{weather.temperature}</h2>
        <h3 style = {{color: weather.isDay ? "orange" : "blue"}}>{weatherMessage()}</h3>
        </Fragment>
    );
}