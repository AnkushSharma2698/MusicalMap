import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Homepage from './components/Hpage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Homepage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//  background-image: url(http://www.bealecorner.org/red/test-080108/pics/2k-Dark-5600-1-1.png);
//  background-repeat: repeat;
//  background-color: #cccccc;
//  vertical-align: middle;
