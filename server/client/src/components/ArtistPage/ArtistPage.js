<<<<<<< HEAD
import React, { Component } from "react";
import "./css/ArtistPage.css";
import Particles from "react-particles-js";
import particlesOptions from "../../Background/particlesOptions";
import playButton from "../PlayButton/PlayButton";
=======
import React, {Component} from 'react';
import './css/ArtistPage.css'
>>>>>>> 5d2d68d0df4f03c6a48c0ea23662ad949ddc5b31

// ===== Implement an artist card with its respective css component === //

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    console.log('In ArtistPage: ',this.props.artistId)
  }
  render() {
    return (
      <div className="blog-card spring-fever">
<<<<<<< HEAD
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
=======
          <img src="https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903" alt=""/>
        <div className="title-content">
          <h3>SPRING FEVER</h3>
          <hr />
          <div className="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
        </div>{/* /.title-content */}
        <div className="card-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </div>{/* /.card-info */}
        <div className="utility-info">
          <ul className="utility-list">
            <li className="comments">12</li>
            <li className="date">03.12.2015</li>
          </ul>
        </div>{/* /.utility-info */}
>>>>>>> 5d2d68d0df4f03c6a48c0ea23662ad949ddc5b31
        {/* overlays */}
        <div className="gradient-overlay" />
        <div className="color-overlay" />
      </div>
<<<<<<< HEAD

=======
>>>>>>> 5d2d68d0df4f03c6a48c0ea23662ad949ddc5b31
    );
  }
}

export default ArtistPage;
