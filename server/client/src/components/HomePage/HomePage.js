import React from 'react';
import './HomePage.css';
import Button from '@material-ui/core/Button';
//Importing particles
import Particles from 'react-particles-js';

//Particle effect styling
import particlesOptions from '../../Background/particlesOptions';
//Import Tilt
import Tilt from 'react-tilt';
//Logo
import GitLogo from './GitLogo.png';


const HomePage = () => {
  return(
    <div className='Home flex w-100 h-100 '>
      <Particles className='particles' id='particlesOptions'
           params={particlesOptions}
         />
      <div className='Title'>
        <h1><font size='123'>Musical Map</font></h1>
      </div>
      <div className='Button'>
        <a href="http://localhost:8888" class="btn btn-green btn-lg ">
            <button>Login To Spotify</button>
        </a><br/>
        <a href="/About" class="btn btn-green btn-lg ">
            <button>About us</button>
        </a>
      </div>
      <Tilt
            className="Tilt logo"
            options={{ max: 50 }}
            // style={{ height: 225, width: 200 }}
          >
            <a href='https://github.com/AnkushSharma2698/MusicalMap'><img className="resize" src={GitLogo} alt="" /></a>
      </Tilt>
      <div id='homefooter'>
        <h4>Created by <a href='https://github.com/AnkushSharma2698'>Ankush Sharma</a> and <a href='https://github.com/roychowd'>Dhruba Chowdhoury</a></h4>
      </div>
    </div>
  )
}

export default HomePage;


{/* <a href='http://localhost:8888' className='anchor'>
  <Button variant="contained" size="large" color="primary" labelStyle={{height: '20px'}} className='grow'>Login to Spotify</Button>
</a> */}
