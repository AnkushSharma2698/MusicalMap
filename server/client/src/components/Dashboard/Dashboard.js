import React, { Component } from "react";
import "./Dashboard.css";
//Import particles
//Importing particles
import Particles from "react-particles-js";
import particlesOptions from "../../Background/particlesOptions";

import { Link } from "react-router-dom";

//Import Axios
import axios from "axios";

import NavBar from "../../NavBar/NavBar";

//Import Spotify url constants
import { spotifySearchURL } from "../../SpotifyConstants/SpotifyConstants";

//import spotify requirements
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();



//Social Media styling
const mediaStyle = {
  fill: "currentcolor"
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      inputState: "",
      artistId: "",
      access__Token: "",
      topArtists: []
    };
  }

  //Get the users top artists
  componentWillMount() {
    spotifyApi.getMyTopArtists().then(response => {
      console.log(response);
      response.items.map(item =>
        this.setState({
          topArtists: this.state.topArtists.concat([item.name + ", "])
        })
      );
      //
    })
    .catch(error => {
      alert('Unable to get Top Artists')
    })
  }



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


  searchSportifyArtists = (event, getHashParams) => {
    let parsed = this.getHashParams();
    let accessToken = parsed.access_token;
    //give the state access to the accessToken

    axios
      .get(
        `${spotifySearchURL}${
          this.state.inputState
        }&type=artist&access_token=${accessToken}`
      )
      .then(response => {
        console.log('Look at this resp',response);
        console.log(response.data.artists.items[0]);

        //Sending the Artist Id back to the App Component;
        this.props.getArtistId(response.data.artists.items[0].id);
      })
      .catch(error => {
        alert("Do not leave the search bar empty");
      });
  };

  //This Function keeps track of changes to the input
  onInputChange = (event, token) => {
    this.setState({ inputState: event.target.value });
  };

  getTheID = getHashParams => {
    let parsed = this.getHashParams();
    let accessToken = parsed.access_token;
    //give the state access to the accessToken

    axios
      .get(
        `${spotifySearchURL}${
          this.state.inputState
        }&type=artist&access_token=${accessToken}`
      )
      .then(response => {
        return this.props.getArtistId(response.data.artists.items[0].id);
      });
  };

  ShowSubmit = () => {
    if (this.state.inputState !=='') {
      return  (
      <Link
        to={{
          pathname: "/ArtistPage",
          hash: `access_token=${
            this.getHashParams().access_token
          }&artist_name=${this.state.inputState}`
        }}
        className="f6 grow link dim ph3 pv2 mb2 dib white w-100 submit"
      >
        Submit
      </Link>
      )
    }
  }

  render() {
    return (
      <div className="dashboard flex">
        <Particles
          className="particles"
          id="particlesOptions"
          params={particlesOptions}
        />
        {/* ====Navbar goes here ===== */}
        <NavBar getHashParams={this.getHashParams()} artistName={this.state.inputState} />
        <div>
          <h1>Find Your Favorite Artists!</h1>
        </div>

        <div id="search-box" className="search-box">
          <input
            onChange={this.onInputChange}
            type="text"
            className="typeahead"
            placeholder="Search for any artist"
          />
        </div>
        {/* //==========Submit Button========// */}
        <div className="ph3 buttondiv">
          {this.ShowSubmit()}
        </div>

        {/* /=========TOP ARTISTS CARD=========/ */}
        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 white mv0 pv2 ph3">Your Top Artists</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0" id="ArtistList">
              {this.state.topArtists}
            </p>
          </div>
        </article>

        {/* =======ADDING SOCIALS ON THE BOTTOM OF THE PAGE=========== */}
        <footer className="pv4 ph3 ph5-ns tc">
          <a
            className="link dim gray dib br-100 h2 w2 mr3 pa2 bg-near-white ba b--black-10"
            href="https://github.com/AnkushSharma2698/MusicalMap"
            title=""
          >
            <svg data-icon="github" viewBox="0 0 32 32" style={mediaStyle}>
              <title>github icon</title>
              <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z" />
            </svg>
          </a>
        </footer>
      </div>
    );
  }
}

export default Dashboard;
