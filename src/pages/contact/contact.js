import React, { Component } from "react";
import Header from "../../components/Header";
import Sass from "../../logo/sass.svg.png";
import Heroku from "../../logo/heroku.png";
import reactIcon from "../../logo/react.png";
import node from "../../logo/node.svg.png";
import express from "../../logo/expressJS.png";
import axios from "../../logo/axios.png";

export class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="top-row">
          <h1 className="news">Launching @ CubeTube.art</h1>

          <h2 className="contact-info">
            Contact Developer: AConery (at) gmail.com
          </h2>
          <div className="buttons">
            <button className="action-buttons">AshBC on Github</button>
            <button className="action-buttons">
              Ashlee Conery on LinkedIn
            </button>
          </div>
        </div>
        <div className="cube-frame">
          <h3>This Site Was Made Using</h3>
          <div className="tool-logos">
            <img className="logos" src={reactIcon} />
            <img className="logos" src={node} />
            <img className="logos" src={express} />
            <img className="logos" src={axios} />
            <img className="logos" src={Sass} />
            <img className="logos" src={Heroku} />
          </div>
        </div>

        <h3 className="bottom-row">
          {" "}
          As well as the SuperRare Api, OpenSea Api + the support of colleagues.
          Thank you to all!
        </h3>
      </div>
    );
  }
}
export default Contact;
