import React from 'react';
import './StyledHome.css';
import Drake from './Drake.jpg';

const StyledHome = () => {
  document.body.style = 'background: black;';

  return(
    <div>
      <div class="cf parent">
        <div class="fl w-24 tc pv5 bg-black-05 col col1">
          {/* <img src={Drake}/> */}
        </div>
        <div class="fl w-24 tc pv5 bg-black-025 col col2">
        </div>
        <div class="fl w-24 tc pv5 bg-black-05 col col3">
          3
        </div>
        <div class="fl w-24 tc pv5 bg-black-025 col col4">
          4
        </div>
      </div>
    </div>

  )
}

export default StyledHome;
