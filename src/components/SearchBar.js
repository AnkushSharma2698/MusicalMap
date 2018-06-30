import React, { Component } from 'react';
import '../Styling/SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="parent">
        <form className="SearchBar">
          <input
            type="email"
            className="validate"
            placeholder="Find your Artist!"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
