import React, { Component } from 'react';
import '../Styling/SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className=" parent row">
        <div className="SearchBar input-field col s5">
          <input
            type="email"
            className="validate"
            placeholder="Find your Artist!"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
