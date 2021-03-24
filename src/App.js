import React, {Component} from "react";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import Header from "./components/Header";
import MainVideoTitle from "./components/MainVideoTitle";

import axios from "axios";


const apiUrl="https://cubes-server.herokuapp.com";

 
class App extends Component {
 
  state = {
    currentVideo: "1af0jruup5gu",
    videoDetails: {},
    videos: [],
  };
  getVideosData= () => {
    axios.get(`${apiUrl}/videos`)
    .then (response => {
      // console.log(response.data);
      this.setState ({videos: response.data})
    })
  };
 getVideoDetailsData= (id) => {
   axios.get(`${apiUrl}/videos/${id}`)
   .then (response => {
     console.log("this is the videoDetails data", response.data);
     this.setState ({videoDetails: response.data})
   })
 };
  componentDidMount (){
    this.getVideosData();
    this.getVideoDetailsData("1af0jruup5gu"); 
 }  
/*always do your api call around the component did mount*/
  // shouldComponentUpdate() {
  //   /*if currentVideo !== this.state.videosDetails.id ? this.setState to videos.id: this.state.currentVideo*/ 
  // }
  componentDidUpdate (prevProps, prevState) {
    console.log("this is my previous state", this.props);
    const {id} = this.props.match.params;
    if (id !== undefined && prevState.videoDetails.id !== Number(id)) {
      this.getVideoDetailsData(id);
    }
  };

  render() {

    return (
      <div className="App">
        <Header />
        <VideoPlayer posterImage={this.state.videoDetails.video}/>
      
        <div className="mainFrame">
          <MainVideoTitle videoDetails={this.state.videoDetails} />
        </div>
        <div className="vlFrame">
          <VideoList className="side-bar" videos={this.state.videos}
          currentVideo={this.state.currentVideo}/>
          </div>
       
      </div>
    );
  }
}

export default App;
