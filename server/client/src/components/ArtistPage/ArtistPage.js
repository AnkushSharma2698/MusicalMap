import React, { Component } from "react";
import "./css/ArtistPage.css";
import axios from "axios";
import { spotifySearchURL } from "../../SpotifyConstants/SpotifyConstants";
import Particles from "react-particles-js";
import particlesOptions from "../../Background/particlesOptions";

// ===== Implement an artist card with its respective css component === //

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: "",
      artist_Name: ""
    };
    console.log("In ArtistPage: ", this.props.inputState);
  }

  componentWillMount() {
    //get access tokens
    let accessToken = this.getHashParams().access_token;
    let artistName = this.getHashParams().artist_name;
    axios
      .get(
        `${spotifySearchURL}${artistName}&type=artist&access_token=${accessToken}`
      )
      .then(response => {
        console.log(response);
        console.log(response.data.artists.items[0].name);
        this.setState({
          imageLink: response.data.artists.items[0].images[0].url,
          artist_Name: response.data.artists.items[0].name
        });
        //console.log(response.data.artists);
        //console.log(response.data.artists.items.images[0].url);
        //this.setState({imageLink: response.})
        // alert(`You searched for ${response.data.artists.items[0].name} and the
        // artist ID is ${response.data.artists.items[0].id}`);
        // //Sending the Artist Id back to the App Component;
        // this.props.getArtistId(response.data.artists.items[0].id);
      });

    //get artist name
  }

  //Used to Parse the parameters
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="blog-card spring-fever">
        <Particles
          className="particles"
          id="particlesOptions"
          params={particlesOptions}
        />
        <img src={this.state.imageLink} alt="" />
        <div className="title-content">
          <h3>{this.state.artist_Name}</h3>
          <hr />
          <div className="intro">
            Yllamco laboris nisi ut aliquip ex ea commodo.
          </div>
        </div>
        {/* /.title-content */}
        <div className="card-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </div>
        {/* /.card-info */}
        <div className="utility-info">
          <ul className="utility-list">
            <li className="comments">12</li>
            <li className="date">03.12.2015</li>
          </ul>
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
