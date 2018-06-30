import React from 'react';
import '../../../Styling/HomeIcon.css';

const NavBar = () => {
  return (
    <div>
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <div className="HomeLogo">
            <a href="#!" class="brand-logo">
              <i className="material-icons">home</i>
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
