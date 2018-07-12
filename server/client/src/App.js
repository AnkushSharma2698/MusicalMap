import React, { Component } from 'react';
import './App.css';
//Import Routing Dependencies
import { Route, Switch } from 'react-router-dom'

//IMPORTING Components
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import ArtistPage from "./components/ArtistPage/ArtistPage";

//import SpotifyWebApi from 'spotify-web-api-js';
//const spotifyApi = new SpotifyWebApi();

//=====================================

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Dashboard' component={Dashboard}/>
        <Route exact path='/ArtistPage' component={ArtistPage}/>
      </Switch>
    )
  }
}

export default App;
