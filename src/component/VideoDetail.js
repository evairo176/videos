import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="col-lg-7 col-md-7 col-sm-12">Loading....</div>;
  }
  //   console.log(description);
  return (
    <div className="col-lg-7 col-md-7 col-sm-12">
      <div className="ui segment">
        <div>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <h4 style={{ color: "#767676" }} className="ui header">
          {video.snippet.channelTitle}
        </h4>
        <p style={{ color: "#767676" }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
