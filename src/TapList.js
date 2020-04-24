import React from 'react';
import Tap from './Tap';

const masterTapList = [
  {
    name: 'Green Monster',
    brand: 'Portland Brewers Guild',
    price: 8,
    style: 'Stout',
    quantity: 124
  },
  {
    name: 'Hoppin Out',
    brand: 'Portland Brewers Guild',
    price: 9,
    style: 'Pale Ale',
    quantity: 124
  },
  {
    name: 'Sour Squeeze',
    brand: 'Portland Brewers Guild',
    price: 8,
    style: 'Sour',
    quantity: 124
  }
];

function TapList(){
  return (
    <React.Fragment>
      {masterTapList.map((tap, index) =>
        <Tap
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          style={tap.style}
          quantity={tap.quantity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default TapList;