import React, {Component} from 'react';
import '../../../Styling/HomeIcon.css';
import GitIcon from '../github.svg';
import '../../../Styling/Navbar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavBar extends Component  {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
       return (
         <li>
           <a
             href="badges.html"
             className=" black waves-effect waves-light btn"
           >
             Login With Spotify
           </a>
         </li>
       );
      default:
        return (
          <li>
            <a
              href="badges.html"
              className=" black waves-effect waves-light btn"
            >
              Logout
            </a>
          </li>
        );
    }
  }


  render() {
    return (
      <div>
        <nav className="grey darken-4">
          <div className="nav-wrapper divstuff">
            <div className="HomeLogo">
              <a href="#!" class="brand-logo">
                <i className="material-icons">home</i>
              </a>
            </div>
            <div className="image-hover img-shadow-1" id="git">
              <a
                className="brand-logo center"
                href="https://github.com/AnkushSharma2698/MusicalMap"
              >
                <img src={GitIcon} height="42" width="42" />
              </a>
            </div>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  href="/auth/google"
                  className="#b71c1c red darken-4 btn waves-effect waves-light"
                >
                  Login With Google
                </a>
              </li>
              <li>
                <a
                  href="/auth/spotify"
                  className=" black waves-effect waves-light btn"
                >
                  Login With Spotify
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar;

// function mapStateToProps({ auth }) {
//   return { auth };
// }
//
// export default connect(mapStateToProps)(NavBar);
