import React from 'react';
import ComplexButton from './ComplexButton/ComplexButton';

const HomePage = () => {
  return(
    <div>
      <h1>Musical Map</h1>
      <div>
        <a href='http://localhost:8888'>
          <ComplexButton/>
        </a>
      </div>
    </div>
  )
}

export default HomePage;
