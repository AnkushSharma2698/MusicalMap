import React, {Component} from 'react';
import './Profile.css'
//For making request to Spotify api
import axios from "axios";
//Import Spotify url constants
import { spotifySearchURL } from "../../SpotifyConstants/SpotifyConstants";

//import the NAVBAR
import NavBar from "../../NavBar/NavBar";
//Import the particles
import Particles from "react-particles-js";
import particlesOptions from "../../Background/particlesOptions";

//import spotify requirements
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();


class Profile extends Component{
  constructor() {
    super();
    if (this.getHashParams().access_token) {
      spotifyApi.setAccessToken(this.getHashParams().access_token);
    }
    this.state= {
      imageUrl:'',
      userName:'',
      userCountry:'',
      followers:'',
      profileURL:''

    }
  }

  componentWillMount() {
    spotifyApi.getMe().then(response=> {
      console.log(response)
      if (response.images[0]===null || response.display_name===null) {
        this.setState({
        imageUrl:'https://images.wallpaperscraft.com/image/man_profile_silhouette_circle_118321_3840x2400.jpg',
        userName:response.id,
        followers:response.followers.total,
        userCountry:response.country,
        profileURL:response.external_urls.spotify
        })
      }else {
        this.setState({
          imageUrl:response.images[0].url,
          userName:response.display_name,
          followers:response.followers.total,
          userCountry:response.country,
          profileURL:response.external_urls.spotify
        })
      }

    })
  }

  //Function to get access token from the hash
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
      <div className='flex profile'>
        {/* //Place Particles Here */}
        <Particles
          className="particles"
          id="particlesOptions"
          params={particlesOptions}
        />
        <NavBar getHashParams={this.getHashParams()} artistName={this.getHashParams().artist_name}/>
        {/* <h1>Welcome To Your Profile</h1> */}
        <h3 id='welcome'>Welcome to Your Profile!</h3>
        {/* =======THE CARD====== */}
        <div className="blog-cards spring-fever card">
          <img src={this.state.imageUrl} alt="" />
          <div className="title-content">
            <h2>{this.state.userName}</h2>
            <hr />
            <div className="intro" />
          </div>
          {/* /.title-content */}
          <div className="card-info">
            <h3 className="followers">
              <span className="little-header">Followers:</span>{" "}
              {this.state.followers}
            </h3>
            <h3 className="followers">
              <span className="little-header">Country:</span>{" "}
              {this.state.userCountry}
            </h3>
          </div>
          {/* /.card-info */}
          <div className="utility-info" />
          {/* /.utility-info */}
          {/* overlays */}
          <div className="gradient-overlay" />
          <div className="color-overlay" />
        </div>
        <div className='ph3'>
          <a class="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib profbutton" href={this.state.profileURL}>Access on Spotify</a>
        </div>
      </div>
    )
  }
}

export default Profile;
