import SearchBar from '../SearchBar';
import React, { Component } from 'react';
import '../../Styling/Homepage.css';
import Header from './Header';
import Footer from './Footer';
import SearchButton from '../SearchButton';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <Header />
        <SearchBar />
        <SearchButton />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
