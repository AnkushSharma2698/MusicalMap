import React, { Component } from "react";
import "./css/ArtistPage.css";
import axios from "axios";
import { spotifySearchURL } from "../../SpotifyConstants/SpotifyConstants";
import Particles from "react-particles-js";
import particlesOptions from "../../Background/particlesOptions";
import Tilt from "react-tilt";

// ===== Implement an artist card with its respective css component === //

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: "",
      artist_Name: "",
      genres: "",
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
        let genreArray = response.data.artists.items[0].genres;

        this.setState({
          imageLink: response.data.artists.items[0].images[0].url,
          artist_Name: response.data.artists.items[0].name,
          followers: response.data.artists.items[0].followers.total,
          genres: genreArray.join()
        });
        console.log(this.state.genres);
      })
      .catch(error => {
        console.log(error);
      });

    // === grabs the similar artists related to the artist that is searched ===

    //get artist name
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  checkGenres = s => {
    if (s != "") {
      return s;
    } else {
      return "No Genres!";
    }
  };

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
      <div className='flex'>
        <Particles
          className="particles"
          id="particlesOptions"
          params={particlesOptions}
        />
        <Tilt className="Tilt  gay" options={{ max : 10 }} style={{  }} >
        <div className="blog-card spring-fever tilt-inner">
          <img src={this.state.imageLink} alt="" />
          <div className="title-content">
            <h2>{this.state.artist_Name}</h2>
            <hr />
            <div className="intro" />
          </div>
          {/* /.title-content */}
          <div className="card-info">
            <h3 className="followers">
              <span className="little-header">Followers:</span>{" "}
              {this.numberWithCommas(this.state.followers)}
            </h3>
            <h3 className="followers">
              <span className="little-header">Genres:</span>{" "}
              {this.checkGenres(this.state.genres)}
            </h3>
          </div>
          {/* /.card-info */}
          <div className="utility-info" />
          {/* /.utility-info */}
          {/* overlays */}
          <div className="gradient-overlay" />
          <div className="color-overlay" />
        </div>
      </Tilt>
      </div>
    );
  }
}

export default ArtistPage;
