import SearchBar from '../SearchBar';
import React, { Component } from 'react';
import '../../Styling/Homepage.css';
import Header from './Header';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div>
          <Header />
          <SearchBar />
        </div>
        <h3 className="Artists">Top Artists</h3>
      </div>
    );
  }
}

export default Homepage;
