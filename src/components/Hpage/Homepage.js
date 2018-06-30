import SearchBar from '../SearchBar';
import React, { Component } from 'react';
import '../../Styling/Homepage.css';
import Header from './Header/Header';
import Footer from './Footer';
import SearchButton from '../SearchButton';
import GitIcon from './github.svg';

var styles = {
  padding: 2000
};

class Homepage extends Component {
  render() {
    return (
      <div>
        <span align="center" className="Homepage">
          <Header />
          <SearchBar />
          <SearchButton className="SearchButton" />
          <Footer />
          <div class="image-hover img-shadow-1">
            <a href="https://github.com/AnkushSharma2698/MusicalMap">
              <img src={GitIcon} height="42" width="42" />
            </a>
          </div>
        </span>
      </div>
    );
  }
}

export default Homepage;
