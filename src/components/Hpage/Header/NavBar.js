import React from 'react';
import '../../../Styling/HomeIcon.css';
import GitIcon from '../github.svg';
import '../../../Styling/Navbar.css';

const NavBar = () => {
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
                href="sass.html"
                className="#b71c1c red darken-4 btn waves-effect waves-light"
              >
                Login With Google
              </a>
            </li>
            <li>
              <a
                href="badges.html"
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
};
export default NavBar;
