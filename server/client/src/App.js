import React, { Component } from "react";
import "./App.css";
//Import Routing Dependencies
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";
=======
import { Route, Switch } from 'react-router-dom'
>>>>>>> 5d2d68d0df4f03c6a48c0ea23662ad949ddc5b31

//IMPORTING Components
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import ArtistPage from "./components/ArtistPage/ArtistPage";
import Play from "./components/PlayButton/Play";

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
    return (
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/ArtistPage" component={ArtistPage} />
        <Route exact path="/play" component={Play} />
=======
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Dashboard' render={()=><Dashboard getArtistId={this.sendArtistIdtoPage}/>}/>
        <Route exact path='/ArtistPage' render={()=><ArtistPage  artistId= {this.state.artistId}/> } />
>>>>>>> 5d2d68d0df4f03c6a48c0ea23662ad949ddc5b31
      </Switch>
    );
  }
}

export default App;
