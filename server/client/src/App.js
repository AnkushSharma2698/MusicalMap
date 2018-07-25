import React, { Component } from 'react';
import './App.css';
//Import Routing Dependencies
import { Route, Switch } from 'react-router-dom'

//IMPORTING Components
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import ArtistPage from "./components/ArtistPage/ArtistPage";
import Profile from "./components/Profile/Profile";
import About from './components/StyledHome/StyledHome';
//import SpotifyWebApi from 'spotify-web-api-js';
//const spotifyApi = new SpotifyWebApi();

//Import transitions
import { TransitionGroup,CSSTransition} from 'react-transition-group';

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
    return this.setState({artistId:id})
  }

  render() {
    return(
      <TransitionGroup>
        <CSSTransition
          key={window.location}
          timeout={1200}
          classNames='fade'
          >
          <Switch location={window.location}>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/About' component={About}/>
              <Route exact path='/Dashboard' render={()=><Dashboard getArtistId={this.sendArtistIdtoPage}/>}/>
              <Route exact path='/ArtistPage' render={()=><ArtistPage  artistId= {this.state.artistId}/> } />
              <Route exact path='/Profile' component={Profile}/>
              <Route render={()=> <div><h1>Page Not Found</h1></div>}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default App;
