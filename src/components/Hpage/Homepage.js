import SearchBar from '../SearchBar';
import React, { Component } from 'react';
import '../../Styling/Homepage.css';
import Header from './Header';
import Footer from './Footer';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div>
          <Header />
          <SearchBar />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
