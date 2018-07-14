import React, {Component} from 'react';
import './css/ArtistPage.css'
import axios from 'axios';

// ===== Implement an artist card with its respective css component === //

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    console.log('In ArtistPage: ',this.props.inputState)
  }

  componentWillMount() {
    //get access tokens
    let accessToken= this.getHashParams().access_token;
    let artistName= this.getHashParams().artist_name;


    //get artist name
  }

//Used to Parse the parameters
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }



  render() {
    return (
      <div className="blog-card spring-fever">
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
        {/* overlays */}
        <div className="gradient-overlay" />
        <div className="color-overlay" />
      </div>
    );
  }
}

export default ArtistPage;
