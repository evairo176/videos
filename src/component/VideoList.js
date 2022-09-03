import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const item = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return (
    <div className="col-lg-5 col-md-5 col-sm-12">
      <div
        className="overflow-x"
        style={{
          maxHeight: "580px",
          overflowX: "hidden",
          overflowY: "visible",
        }}
      >
        {item}
      </div>
    </div>
  );
};

export default VideoList;
