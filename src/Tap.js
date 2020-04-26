import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){

  const tapStyles = {
    height: '180px',
    width: '180px',
    border: '1px solid #33ccff',
    textAlign: 'center',
    padding: '2%',
    marginBottom: '2em',
    marginTop: '2em'
  }

  return (
    <React.Fragment>
      <div onClick = {() =>  props.whenTapClicked(props.id)}>
        <div style={tapStyles}>
          <p><strong>Name:</strong> <em>{props.name}</em></p>
          <p><strong>Brand:</strong> <em>{props.brand}</em></p>
          <p><strong>Price:</strong> <em>${props.price}</em></p>
          <p><strong>Style:</strong> <em>{props.style}</em></p>
          <p><strong>Quantity:</strong> <em>{props.quantity} pints</em></p>
          <div className="buttons">
            <button onClick={()=> props.whenSellClicked(props.id)} type="submit">Sell</button>
          </div>
        </div>
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