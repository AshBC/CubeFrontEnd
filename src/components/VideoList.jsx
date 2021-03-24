import React from "react";
import {Link} from "react-router-dom";

function VideoList(props) {
  console.log(props);
  if (!props.videos){
    return (
      <p>loading</p>
    )
  }
  return (
    <ul className="side-bar">
      {props.videos
        .map((video) => (
          <li className="list-item" key={video.id}>
          <Link to={`/videos/${video.id}`}>
            <div className="vid-title_name">
            <h2 className="vidT">{video.title}</h2>
            <h3 className="location">{video.channel}</h3>
            </div>
            <img className="vid-image" src={video.image} alt="" />
          </Link> 
          </li> 
        ))} 
    </ul>
  );
}

export default VideoList;
