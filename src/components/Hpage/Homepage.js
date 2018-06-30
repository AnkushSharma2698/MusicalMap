import SearchBar from '../SearchBar';
import React, { Component } from 'react';
import '../../Styling/Homepage.css';
import Header from './Header/Header';
import Footer from './Footer';
import SearchButton from '../SearchButton';

var styles = {
  padding: 2000
};

class Homepage extends Component {
  render() {
    return (
      <span align="center" className="Homepage">
        <Header />
        <SearchBar />
        <SearchButton className="SearchButton" />
        <Footer />
      </span>
    );
  }
}

export default Homepage;
