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
      <div className="container">
        <div className="Homepage col s12">
          <Header />
          <SearchBar />
          <SearchButton className="SearchButton" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
