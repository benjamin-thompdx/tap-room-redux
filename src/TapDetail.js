import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  const { tap } = props;

  const tapDetailStyles = {
    height: '200px',
    width: '200px',
    border: '1px solid #33ccff',
    textAlign: 'center',
    padding: '2%',
    marginBottom: '2em',
    marginTop: '2em'
  }

  return (
    <React.Fragment>
      <div style={tapDetailStyles}>
        <h1>{tap.name}</h1>
        <p>{tap.brand}</p>
        <p>${tap.price}</p>
        <p>{tap.style}</p>
        <p>{tap.quantity} pints</p>
      </div>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
};

export default TapDetail;