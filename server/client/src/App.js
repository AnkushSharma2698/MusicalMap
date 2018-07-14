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
  constructor() {
    super();
    this.state = {
      artistId:''
    }
  }

//Set the state to get the Id of the currently search artist
  sendArtistIdtoPage = (id) => {
    return (
      this.setState({artistId:id}),
      console.log('This is the Artist id in App.js',this.state.artistId)
    )
  }

  render() {
    return(
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Dashboard' render={()=><Dashboard getArtistId={this.sendArtistIdtoPage}/>}/>
        <Route exact path='/ArtistPage' render={()=><ArtistPage  artistId= {this.state.artistId}/> } />
      </Switch>
    )
  }
}

export default App;
