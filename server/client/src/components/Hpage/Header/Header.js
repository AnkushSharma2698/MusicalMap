import React from 'react';
import '../../../Styling/Header.css';
import NavBar from './NavBar';

var iconStyle = {
  padding: 30
};

const Header = () => {
  return (
    <div>
      <NavBar />
      <section id="title" className="Title">
        <header className="header">Musical Map</header>
        <h4>Search for any Artist</h4>
      </section>
    </div>
  );
};

export default Header;
