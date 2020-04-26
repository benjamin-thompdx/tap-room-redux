import React from 'react';

function Header(){

  const headerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '30vh',
    backgroundColor: '#33ccff',
    backgroundImage: 'linear-gradient(to bottom, #33ccff, #1A285A)',
    width: '100%',
    color: '#f5f5f5'
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <div className="navigation">
          <a href="http://endless.horse/">Support</a>
          <a href="http://www.republiquedesmangues.fr/">Account</a>
        </div>
        <div className="header-section">
          <h1>Tap Iventory Tracker</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;