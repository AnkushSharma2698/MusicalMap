import React from 'react';
import '../../Styling/Homepage.css';
import '../../Styling/Footer.css';
import GitIcon from './github.svg';

const Footer = () => {
  return (
    <div className="OverFoot">
      <div id="Footer">
        <h5 className="Artists">Top Artists</h5>
        <div class="row">
          <div class="col s12 m5">
            <div className="card-panel black">
              <span className="white-text">Contains top Spotify Artists</span>
            </div>
          </div>
        </div>
      </div>
      <div className="githubBoys">
        Created by:{' '}
        <a href="https://github.com/AnkushSharma2698">Ankush Sharma</a> and{' '}
        <a href="https://github.com/roychowd">Roy Chowdhoury</a>
      </div>
    </div>
  );
};

export default Footer;
