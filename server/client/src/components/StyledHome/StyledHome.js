import React from 'react';
import './StyledHome.css';
import Drake from './Drake.jpg';

const StyledHome = () => {
  document.body.style = 'linear-gradient(to right, #dae2f8, #d6a4a4);';
// linear-gradient(to right, #dae2f8, #d6a4a4);
  return(
    <div>
      <div class="cf parent1">
        <div class="fl w-24 tc pv5 bg-black-05 col col1">
        </div>
        <div class="fl w-24 tc pv5 bg-black-025 col col2">
        </div>
        <div>
          <h1>Created By:</h1>
          <h2 className='names'>Ankush Sharma and Dhruba Chowdhury</h2>
        </div>
        <br/>
        <div>
          <h3 className='SecTitle'>Who We Are</h3>
          <p>We Are Computer Science students at the University of Alberta with a passion for all things related to app development.</p>
          <br/>
          <br/>
          <h3 className='SecTitle'>Why Make this App?</h3>
          <p>We LOVE music and are always looking for new artists in the genres of music that we like, so we thought why not build an app that can help us find
          those artists!
          But we also just really wanted to learn some of the latest technologies present in Web Development.
          </p>
        </div>
        <br/>
        <div>
          <h3 className='SecTitle'>Contact Information</h3>
          <h4 className='contactInfo'>Email: ankush1@ualberta.ca AND Konishky@ualberta.ca</h4>
        </div>

      </div>
    </div>

  )
}

export default StyledHome;
