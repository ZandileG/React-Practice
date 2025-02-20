import React from "react";
import YouTubeVideo from "./YouTubeVideo";

function YouTubeVideoList(){

const ytList = [
    {
        title: "Japanese City Pop",
        channel: "TokyoMusic",
        image: "https://picsum.photos/100",
        views: "767K Views"
    },
    {
        title: "Chill City Pop",
        channel: "ChillMusic",
        image: "https://picsum.photos/100",
        views: "300K Views"
    },
    {
        title: "Eric Clapton Greatest Hits",
        channel: "ClaptonTribute",
        image: "https://picsum.photos/100",
        views: "1M Views"
    },
];

    return(
        <div>{
            ytList.map((video, i) => 
            <YouTubeVideo 
            key = {i}
            image = {video.image}
            title = {video.title} 
            channel = {video.channel} 
            views = {video.views} />
        )}</div>
    );
} 

export default YouTubeVideoList;