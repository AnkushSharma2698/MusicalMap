import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom';


const NavBar = (props) => {

  return(
    <nav className="flex justify-between bb b--white-10 w-100 pv0" >
      <Link
        to={{
          pathname: "/Dashboard",
          hash: `access_token=${
            props.getHashParams.access_token
          }&artist_name=${props.artistName}`
        }}
        className="link white-70 hover-white no-underline flex items-center pa3 dash" href="/Dashboard">
          Dashboard
      </Link>
      <div className="flex-grow pa3 flex items-center">
        <Link
          to={{
            pathname:'/About'
          }}
          className="f6 link dib white dim mr3 mr4-ns" href="/About">About
        </Link>
        <Link
          to={{
            pathname: "/Profile",
            hash: `access_token=${
              props.getHashParams.access_token
            }&artist_name=${props.artistName}`
          }}
          className="f6 link dib white dim mr3 mr4-ns" href="/Profile">
          Profile
        </Link>
        <Link
          to={{pathname:'/'}}
          className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="/">Sign Out</Link>
      </div>
    </nav>
  )
}

export default NavBar;
