import React from 'react';

function Footer(){

  const footerStyles = {
    backgroundColor: '#1A285A',
    width: '100%',
    color: '#f5f5f5',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1%',
    position: 'fixed',
    bottom: '0',
    left: '0'
  }

  return(
    <React.Fragment>
    <div style={footerStyles}>
      <h3><span class='tapFooter'>Acu</span>Tap</h3>
      <h4>&copy; Benjamin Thom</h4>
    </div>
    </React.Fragment>
  );
}

export default Footer;