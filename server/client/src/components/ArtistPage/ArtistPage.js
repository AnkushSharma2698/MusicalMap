import React, { Component } from "react";
import "./css/ArtistPage.css";
import Particles from "react-particles-js";
import particlesOptions from "../../Background/particlesOptions";
import playButton from "../PlayButton/PlayButton";

// ===== Implement an artist card with its respective css component === //

class ArtistPage extends Component {
  render() {
    return (
      <div className="blog-card spring-fever">
        <Particles
          className="particles"
          id="particlesOptions"
          params={particlesOptions}
        />
        <playButton />
        <img
          src="http://pixel.nymag.com/imgs/daily/vulture/2015/07/15/15-future-rapper.w529.h352.2x.jpg"
          alt=""
        />
        {/* <div className="title-content">
          </div>/.title-content */}

        <div className="card-info">
          <h2>ARTIST NAME</h2>
          <hr />
          {/* <div className="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div> */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </div>
        {/* /.card-info */}
        <div className="utility-info">
          {/* <ul className="utility-list">
              <li className="comments">12</li>
              <li className="date">03.12.2015</li>
            </ul> */}
        </div>
        {/* /.utility-info */}
        {/* overlays */}
        <div className="gradient-overlay" />
        <div className="color-overlay" />
      </div>

    );
  }
}

export default ArtistPage;
