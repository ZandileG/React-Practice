import { Fragment } from "react";

function YouTubeVideo({ image, title, channel, views }){
    return (
    <Fragment>
    <img src={image} alt="Thumbnail"/>
    <h2>{title}</h2>
    <h4>{channel}</h4>
    <p>{views}</p>
    </Fragment>
    );
}

export default YouTubeVideo;