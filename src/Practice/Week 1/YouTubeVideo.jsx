import { Fragment } from "react";

export default function YouTubeVideo({ image, title, channel, views }){
    return (
    <Fragment>
    <h1>YouTube</h1>
    <img src={image} alt="Thumbnail"/>
    <h2>{title}</h2>
    <h4>{channel}</h4>
    <p>{views}</p>
    </Fragment>
    );
}