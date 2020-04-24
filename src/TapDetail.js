import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  const { tap } = props;

  return (
    <React.Fragment>
      <h1>Tap Details</h1>
      <p><strong>Name:</strong> <em>{props.name}</em></p>
      <p><strong>Brand:</strong> <em>{props.brand}</em></p>
      <p><strong>Price:</strong> <em>${props.price}</em></p>
      <p><strong>Style:</strong> <em>{props.style}</em></p>
      <p><strong>Quantity:</strong> <em>{props.quantity} pints</em></p>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
};

export default TapDetail;