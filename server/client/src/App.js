import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Homepage from './components/Hpage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import {connect} from 'react-redux';
//import the created actions
import * as actions from './actions';

class App extends Component {
  render() {
    return (
      <div className="Appdiv">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

//  background-image: url(http://www.bealecorner.org/red/test-080108/pics/2k-Dark-5600-1-1.png);
//  background-repeat: repeat;
//  background-color: #cccccc;
//  vertical-align: middle;
