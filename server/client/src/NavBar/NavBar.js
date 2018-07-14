import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return(
    <nav className="flex justify-between bb b--white-10 w-100 pv0" >
      <a className="link white-70 hover-white no-underline flex items-center pa3" href="/Dashboard">
          Home
      </a>
      <div className="flex-grow pa3 flex items-center">
        <a className="f6 link dib white dim mr3 mr4-ns" href="#0">About</a>
        <a className="f6 link dib white dim mr3 mr4-ns" href="#0">Profile</a>
        <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="/">Sign Out</a>
      </div>
    </nav>
  )
}

export default NavBar;
