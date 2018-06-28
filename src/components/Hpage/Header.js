import React from 'react';

var titleStyle = {
  color: 'black',
  fontSize: 60
};

const Header = () => {
  return (
    <div className="Title">
      <h1 style={titleStyle}>Music Discovery</h1>
      <h3>Search For Any Artist</h3>
    </div>
  );
};

export default Header;
