import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  var description = video.snippet.description.substring(0, 50) + "...";
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item mb-2">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content ">
        <div className="header">{video.snippet.title}</div>
        <div className="channel-title">{video.snippet.channelTitle}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
