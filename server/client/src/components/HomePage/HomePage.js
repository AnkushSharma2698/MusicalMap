import React from 'react';
import './HomePage.css';
import Button from '@material-ui/core/Button';

const HomePage = () => {
  return(
    <div className='Home w-60'>
      <h1><font size='123'>Musical Map</font></h1>
      <div className='Button'>
        <a href='http://localhost:8888' className='anchor'>
          {/* <ComplexButton/> */}
          <Button variant="contained" size="large" color="primary" labelStyle={{height: '20px'}}>Login to Spotify</Button>
        </a>
      </div>
    </div>
  )
}

export default HomePage;
