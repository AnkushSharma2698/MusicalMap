import React, { Component } from 'react';
import './App.css';
//Generates the particles on the background
import Particles from 'react-particles-js';
//Import Routing Dependencies
import { Route, Switch } from 'react-router-dom'
import particlesOptions from './components/particlesOptions/particlesOptions'

//IMPORTING Components
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';

//import SpotifyWebApi from 'spotify-web-api-js';
//const spotifyApi = new SpotifyWebApi();

//=====Particle effect styling=====
// const particlesOptions = {
//    particles: {
//     number: { value: 160, density: { enable: true, value_area: 800 } },
//     color: { value: "#ffffff" },
//     shape: {
//       type: "circle",
//       stroke: { width: 0, color: "#000000" },
//       polygon: { nb_sides: 5 },
//       image: { src: "img/github.svg", width: 100, height: 100 }
//     },
//     opacity: {
//       value: 1,
//       random: true,
//       anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
//     },
//     size: {
//       value: 3,
//       random: true,
//       anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
//     },
//     line_linked: {
//       enable: false,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: 1,
//       direction: "none",
//       random: true,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: { enable: false, rotateX: 600, rotateY: 600 }
//     }
//   },
//   retina_detect: true
// };

//=====================================

class App extends Component {
  render() {
    return(
      <div className='App flex'>
        {/* ======BACKGROUND PARTICLE===== */}
        <Particles className='particles' id='particlesOptions'
          params={particlesOptions}
        />
        {/* ======BACKGROUND PARTICLE===== */}
        {/* START OF COMPONENTS===and grouping the routes in a switch statement */}
        <Switch>
          <Route path='/' component={HomePage}/>
          <Route path='/Dashboard' component={Dashboard}/>
        </Switch>
      </div>
    )
  }
}

export default App;
