import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <React.Fragment>
      <div onClick = {() =>  props.whenTapClicked(props.id)}>
        <p><strong>Name:</strong> <em>{props.name}</em></p>
        <p><strong>Brand:</strong> <em>{props.brand}</em></p>
        <p><strong>Price:</strong> <em>${props.price}</em></p>
        <p><strong>Style:</strong> <em>{props.style}</em></p>
        <p><strong>Quantity:</strong> <em>{props.quantity} pints</em></p>
        <button onClick={()=> props.whenSellClicked(props.id)} type="submit">Sell</button>
      </div>
    </React.Fragment>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
}

export default Tap;