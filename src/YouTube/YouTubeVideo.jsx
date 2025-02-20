import { Fragment } from "react";

function YouTubeVideo(props){
    const { image, title, channel, views } = props;
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