import React from "react";

function VideoPlayer(props) {

  return (
  <iframe className="main-video" width="100vw" height="450px" border="0" src={props.posterImage}></iframe>
  // <video className="main-video" controls width="250" poster={props.posterImage} autoPlay><source src={props.videoLink} type="video" /></video>;
  );
}

export default VideoPlayer;
