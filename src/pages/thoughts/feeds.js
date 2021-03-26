import React, { Component } from "react";
import Header from "../../components/Header";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import "../../style/partials/feed.scss";

export class TwitterFeed extends Component {
  render() {
    return (
      <div>
        <div className="feedContainer">
          <h2 className="feedDescrip">
            It has been said twitter is the space of crypto creators and their
            dialogue...
          </h2>
        </div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cryptovoxels"
          options={{ height: 700 }}
        />
        {/* <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        /> */}
        <div className="space"></div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MuseumofCrypto"
          options={{ height: 700 }}
        />

        <Header />
      </div>
    );
  }
}
export default TwitterFeed;
