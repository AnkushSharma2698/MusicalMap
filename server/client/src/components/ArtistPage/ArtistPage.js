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
      artist_Name: "",
      genres: [],
      followers: ""
    };
    console.log("In ArtistPage: ", this.props.inputState);
  }

  componentWillMount() {
    //get access tokens
    let accessToken = this.getHashParams().access_token;
    let artistName = this.getHashParams().artist_name;

    // === GRABS the artist name and image link ====
    axios
      .get(
        `${spotifySearchURL}${artistName}&type=artist&access_token=${accessToken}`
      )
      .then(response => {
        console.log(response);
        console.log(response.data.artists.items[0].name);
        this.setState({
          imageLink: response.data.artists.items[0].images[0].url,
          artist_Name: response.data.artists.items[0].name,
          followers: response.data.artists.items[0].followers.total
        });
        console.log(this.state.followers);
      })
      .catch(error => {
        console.log(error);
      });

    // === grabs the similar artists related to the artist that is searched ===

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
          <h2>{this.state.artist_Name}</h2>
          <hr />
          <div className="intro" />
        </div>
        {/* /.title-content */}
        <div className="card-info">
          <h3 className="followers">Followers: {this.state.followers}</h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </div>
        {/* /.card-info */}
        <div className="utility-info" />
        {/* /.utility-info */}
        {/* overlays */}
        <div className="gradient-overlay" />
        <div className="color-overlay" />
      </div>
    );
  }
}

export default ArtistPage;
