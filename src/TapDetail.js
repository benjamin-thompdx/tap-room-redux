import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  const { tap } = props;

  return (
    <React.Fragment>
      <h1>Tap Details</h1>
      <p><strong>Name:</strong> <em>{tap.name}</em></p>
      <p><strong>Brand:</strong> <em>{tap.brand}</em></p>
      <p><strong>Price:</strong> <em>${tap.price}</em></p>
      <p><strong>Style:</strong> <em>{tap.style}</em></p>
      <p><strong>Quantity:</strong> <em>{tap.quantity} pints</em></p>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
};

export default TapDetail;