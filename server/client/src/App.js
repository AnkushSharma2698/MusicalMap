import React, { Component } from 'react';
import './App.css';
//Generates the particles on the background
import Particles from 'react-particles-js';

//IMPORTING Components
import HomePage from './components/HomePage/HomePage';

//import SpotifyWebApi from 'spotify-web-api-js';
//const spotifyApi = new SpotifyWebApi();

//=====Particle effect styling=====
const particlesOptions = {
    particles: {
      number: {
        value:100,
        density: {
          enable:true,
          value_area:1000
        }
      }
    }
  }
//=====================================

class App extends Component {
  render() {
    return(
      <div className='App container'>
        {/* ======BACKGROUND PARTICLE===== */}
        <Particles className='particles'
          params={particlesOptions}
        />
        {/* ======BACKGROUND PARTICLE===== */}
        {/* ========START OF COMPONENTS======== */}
        <HomePage/>
      </div>
    )
  }
}

export default App;
