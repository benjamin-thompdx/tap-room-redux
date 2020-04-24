import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.style}</p>
      <p>{props.quantity}</p>
      <button type="submit">Sell</button>
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  style: PropTypes.string,
  quantity: PropTypes.number
}

export default Tap;