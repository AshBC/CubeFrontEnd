import React from "react";
// import heart from "../icons/Icon-likes.svg";
import eye from "../icons/Icon-views.svg";
import ear from "../icons/Icon-ear.jpg";
import AudioPlayer from "../components/AudioPlayer";

class MainVideoTitle extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        {console.log(this.props)}
        <div className="main-video__info-div">
          <h1 className="main-video__title">{this.props.videoDetails.title}</h1>
          <div className="container">
            <p className="by">@ {this.props.videoDetails.channel}</p>
            <p className="date">{this.props.videoDetails.timestamp}</p>
            {/* <p className="date">
              {new Date(this.props.videoDetails.timestamp).toLocaleDateString()}
            </p> */}
          </div>
          {/* <div className="counter">
            <div className="views">
              <img className="icons" src={eye} alt="eye symbol for views" />
              <p>{this.props.videoDetails.views}</p>
            </div> */}
          {/* </div> */}
          <p className="VRinstructions"><img className="icons" src={eye} alt="eye symbol for views" />Enter the exhibition seen above by clicking on the screen. Moving your finger on your track pad will determine the direction you are looking. Using your arrow keys you can move around the galleries and up stairs (you can even swim!). On the screen you will also see a four-way directional tool that can be used instead of your track-pad or arrow keys.</p>
          <div className="body">
            <p>{this.props.videoDetails.description}</p>
          </div>
          <div className={this.props.videoDetails.audio? "audio":"empty"}>
          <img className="icon-ear" src={ear} alt="this icon indicated the audio player below" /><p className="audio-title">This is a brief describe tour of the exhibition to kick-off your visit.</p>
            <AudioPlayer audio={this.props.videoDetails.audio} audioFile={this.props.videoDetails.audiofile} />
          </div>
        </div>
      </div>
    );
  }
}
export default MainVideoTitle;
