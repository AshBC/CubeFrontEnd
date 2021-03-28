import React from "react";

function VideoPlayer(props) {
  return (
    <iframe
      className="main-video"
      width="100vw"
      height="450px"
      border="0"
      src={props.posterImage}
    ></iframe>
  );
}

export default VideoPlayer;
