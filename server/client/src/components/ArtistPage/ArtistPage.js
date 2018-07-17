import React, { Component } from "react";
import "./css/ArtistPage.css";
import axios from "axios";
import ReactPlayer from "react-player";
import {
  spotifySearchURL,
  TopSongs
} from "../../SpotifyConstants/SpotifyConstants";
import Particles from "react-particles-js";
import particlesOptions from "../../Background/particlesOptions";
import Tilt from "react-tilt";
import NavBar from "../../NavBar/NavBar";

// ===== Implement an artist card with its respective css component === //

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: "",
      artist_Name: "",
      genres: "",
      followers: "",
      artistId: "",
      songURL: [],
      songName: [],
      AlbumPic: [],
      relatedArtists: [],
      relatedArtistImages: []
    };
  }

  componentWillMount() {
    //get access tokens
    let accessToken = this.getHashParams().access_token;
    let artistName = this.getHashParams().artist_name;
    var ArtID = "";
    // === GRABS the artist name and image link ====
    axios
      .get(
        `${spotifySearchURL}${artistName}&type=artist&access_token=${accessToken}`
      )
      .then(response => {
        let genreArray = response.data.artists.items[0].genres;
        ArtID = response.data.artists.items[0].id;

        this.setState({
          imageLink: response.data.artists.items[0].images[0].url,
          artist_Name: response.data.artists.items[0].name,
          followers: response.data.artists.items[0].followers.total,
          genres: genreArray.join(),
          artistId: response.data.artists.items[0].id
        });
      })
      .catch(error => {
        console.log(error);
      });

    // === grabs the similar artists related to the artist that is searched ===
    // axios.get(GET https://api.spotify.com/v1/artists/{id}/top-tracks
    setTimeout(() => {
      console.log(ArtID);
      console.log(accessToken);

      fetch(`${TopSongs}${ArtID}/top-tracks?country=CA`, {
        headers: { Authorization: "Bearer " + accessToken }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          var song = {
            URL: [],
            PIC: [],
            SNAME: []
          };
          for (var i = 0; i < 3; i++) {
            console.log(i);
            song.URL.push(data.tracks[i].preview_url);
            song.PIC.push(data.tracks[i].album.images[0].url);
            song.SNAME.push(data.tracks[i].name);
          }
          console.log(song);
          this.setState({
            songURL: song.URL,
            songName: song.SNAME,
            AlbumPic: song.PIC
          });
          console.log(this.state.songURL);
        });

      //
    }, 250);

    //get artist name
    setTimeout(() => {
      fetch(`${TopSongs}${ArtID}/related-artists`, {
        headers: { Authorization: "Bearer " + accessToken }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          var artist = [];
          var aURL = [];
          for (let p = 0; p < 3; p++) {
            artist.push(data.artists[p].name);
            aURL.push(data.artists[p].images[0].url);
          }
          console.log(artist, aURL);
          this.setState({ relatedArtistImages: aURL, relatedArtists: artist });
        });
    }, 250);
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  checkGenres = s => {
    if (s !== "") {
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

  showTracks() {
    let results = [];
    for (let k = 0; k < 3; k++) {
      console.log("ARRAY", this.state.AlbumPic[k]);
      results.push(
        <div className="flex flexy">
          <Tilt
            className="Tilt options"
            options={{ max: 50 }}
            style={{ height: 225, width: 200 }}
          >
            <img className="resize" src={this.state.AlbumPic[k]} alt="" />
            <h5>{this.state.songName[k]}</h5>
          </Tilt>

          <ReactPlayer
            className="reactPlayer"
            url={this.state.songURL[k]}
            width={"inherit"}
            height={80}
            playing={false}
            controls={true}
          />
        </div>
      );
    }
    return results;
  }

  showRelatedArtists() {
    let results = [];
  }

  render() {
    return (

        <div className="flex parent">
          <Particles
            className="particles"
            id="particlesOptions"
            params={particlesOptions}
          />
          <NavBar
            getHashParams={this.getHashParams()}
            artistName={this.getHashParams().artist_name}
          />

          <div className="blog-card spring-fever">
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
          {/* //REACT PLAYER STARTS HERE ++++++++ */}
          {this.showTracks()}
          {this.showRelatedArtists()}
        </div>

    );
  }
}

export default ArtistPage;
