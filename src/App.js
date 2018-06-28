import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        Music Discovery
        <div>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
