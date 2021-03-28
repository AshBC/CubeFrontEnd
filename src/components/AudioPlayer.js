import React from "react";
import ReactAudioPlayer from "react-audio-player";

class AudioPlayer extends React.Component {
  render(props) {
    console.log(this.props.audioFile);
    return (
      <div>
        <ReactAudioPlayer
          src={this.props.audioFile}
          autoplay
          controls
          alt="this audio player includes a brief describe tour of the exhibition. Clicking anywhere on it should cause audio to begin"
        />
      </div>
    );
  }
}
export default AudioPlayer;
