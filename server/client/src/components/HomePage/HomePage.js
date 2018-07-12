import React from 'react';
import './HomePage.css';
import Button from '@material-ui/core/Button';
//Importing particles
import Particles from 'react-particles-js';

//Particle effect styling
import particlesOptions from '../../Background/particlesOptions';



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
        <a href='http://localhost:8888' className='anchor'>
          {/* <ComplexButton/> */}
          <Button variant="contained" size="large" color="primary" labelStyle={{height: '20px'}} className='grow'>Login to Spotify</Button>
        </a>
      </div>
    </div>
  )
}

export default HomePage;
