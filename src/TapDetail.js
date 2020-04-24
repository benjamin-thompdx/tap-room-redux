import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  const { tap } = props;

  return (
    <React.Fragment>
      <h1>{tap.name}</h1>
      <p>{tap.brand}</p>
      <p>${tap.price}</p>
      <p>{tap.style}</p>
      <p>{tap.quantity} pints</p>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
};

export default TapDetail;