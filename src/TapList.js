import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

// const masterTapList = [
//   {
//     name: 'Green Monster',
//     brand: 'Portland Brewers Guild',
//     price: 8,
//     style: 'Stout',
//     quantity: 124
//   },
//   {
//     name: 'Hoppin Out',
//     brand: 'Portland Brewers Guild',
//     price: 9,
//     style: 'Pale Ale',
//     quantity: 124
//   },
//   {
//     name: 'Sour Squeeze',
//     brand: 'Portland Brewers Guild',
//     price: 8,
//     style: 'Sour',
//     quantity: 124
//   }
// ];

function TapList(props){
  return (
    <React.Fragment>
      {props.tapList.map((tap) =>
        <Tap
          whenTapClicked = {props.onTapSelection}
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          style={tap.style}
          quantity={tap.quantity}
          id={ticket.id}
          key={index}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
};

export default TapList;