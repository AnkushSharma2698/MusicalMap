import React from 'react';
import '../../Styling/Homepage.css';
import '../../Styling/Footer.css';

const Footer = () => {
  return (
    <div id="Footer">
      <h5 className="Artists">Top Artists</h5>
      <div class="row">
        <div class="col s12 m5">
          <div className="card-panel green darken-4">
            <span className="white-text">Contains top Spotify Artists</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
