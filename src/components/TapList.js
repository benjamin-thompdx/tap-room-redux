import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <React.Fragment>
      {props.tapList.map((tap) =>
        <Tap
          whenTapClicked = {props.onTapSelection}
          whenSellClicked = {props.onClickingSell}
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          style={tap.style}
          quantity={tap.quantity}
          key={tap.id}
          id={tap.id}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default TapList;