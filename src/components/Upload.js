import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

class Upload extends Component {
  state = {
    uploadTitle: "",
    onlineSpace: "",
    uploadDescription: "",
    dates: "",
    videoURL: "",
    image: "",
    formFieldsFilled: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.postNewVideo();
  };

  postNewVideo = () => {
    axios
      .post(`https://cubes-server.herokuapp.com/videos`, {
        name: this.state.uploadTitle,
        channel: this.state.onlineSpace,
        description: this.state.uploadDescription,
        timestamp: this.state.dates,
        video: this.state.videoURL,
        image: "",
      })
      .then((response) => {
        console.log("this is the resp for posting to api", response);
        this.setState({
          uploadTitle: "",
          onlineSpace: "",
          uploadDescription: "",
          dates: "",
          videoURL: "",
          image: "",
        });
      })
      .catch((err) => console.log(err));
  };

  checkFormFilled = () => {
    const { uploadTitle, uploadDescription } = this.state;
    if (uploadTitle.length > 2 && uploadDescription.length > 5) {
      this.setState({ formFieldsFilled: true });
    } else {
      this.setState({ formFieldsFilled: false });
    }
  };

  handleTitleInputChange = (event) => {
    this.setState({
      uploadTitle: event.target.value,
    });
    this.checkFormFilled();
  };

  handleSpaceInputChange = (event) => {
    this.setState({
      onlineSpace: event.target.value,
    });
  };

  handleVideoDescriptionInputChange = (event) => {
    this.setState({
      uploadDescription: event.target.value,
    });
    this.checkFormFilled();
  };
  handleDatesInputChange = (event) => {
    this.setState({
      dates: event.target.value,
    });
  };
  handleVideoInputChange = (event) => {
    this.setState({
      videoURL: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="form-page">
          <h1 className="upload-title">Add Your Exhibition</h1>
          <form onSubmit={this.handleFormSubmit}>
            <img
              className="upload-image"
              src="https://media.giphy.com/media/8rEFo5ZrPaeBolyIah/giphy.gif"
            />

            <h3 className="upload-subtitles">Exhibition Title</h3>
            <textarea
              onChange={this.handleTitleInputChange}
              className="userName-input"
              name="uploadtitle"
              placeholder="Add your exhibition title here (we are case sensitive)"
              alt="Add your exhibition title here (we are case sensitive)"
              value={this.state.uploadTitle}
            />

            <h3 className="upload-subtitles">
              Exhibition Dates (infinite is possible)
            </h3>
            <textarea
              onChange={this.handleDatesInputChange}
              className="userName-input"
              name="dates"
              placeholder="Only if you want"
              alt="add exhibition dates here if there are any to note"
              value={this.state.dates}
            />

            <h3 className="upload-subtitles">EXHIBITION SPACE</h3>
            <textarea
              onChange={this.handleSpaceInputChange}
              className="userName-input"
              name="onlinespace"
              placeholder="Example: MOCA CrytoVoxels"
              alt="Add full Url here to your exhibition here (exhibitions can also be audio only)"
              value={this.state.onlineSpace}
            />

            <h3 className="upload-subtitles">EXHIBITION URL</h3>
            <textarea
              onChange={this.handleVideoInputChange}
              className="userName-input"
              name="videourl"
              placeholder="Please enter the complete Url. If you are not loading a link from crytovoxels please include the embed url as this will directly pass into an iframe. Example:https://www.youtube.com/embed/mUF5ZIehenU"
              alt="please add the complete embed url"
              value={this.state.videoURL}
            />

            <h3 className="upload-subtitles">
              ADD EXHIBITION DESCRIPTION (500 Ch)
            </h3>
            <textarea
              onChange={this.handleVideoDescriptionInputChange}
              className="userDescription-input"
              name="uploadtext"
              placeholder="A little context is required."
              alt="please provide some description about your exhibition. This field is required"
              value={this.state.uploadDescription}
            />

            <h3 className="upload-subtitles">
              Your exhibition will immediately appear in the list, and can be
              accessed by all, it will not have a unique thumbnail or describe
              tour until it has been reviewed. We do our best, however it can
              take up to 7 days for this information to be updated on Cube. Cube
              reserves the right to take down content deemed hurtful.
            </h3>
            <button
              disabled={this.state.formFieldsFilled ? false : true}
              className="btn-publish"
            >
              Publish
            </button>
          </form>
          <Header />
        </div>
      </div>
    );
  }
}

export default Upload;
