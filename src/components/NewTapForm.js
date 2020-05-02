import React from 'react';
import { v4 } from 'uuid';
import { PropTypes } from 'prop-types';

function NewTapForm(props){

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      style: event.target.style.value,
      quantity: event.target.quantity.value,
      id: v4()
    });

  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <h3>New Tap Form</h3>
        <input 
          type='text'
          name='name'
          placeholder='tap name' required/>
        <input 
          type='text'
          name='brand'
          placeholder='tap brand' required/>
        <input 
          type='number'
          name='price'
          placeholder='tap price' required/>
        <input 
          type='text'
          name='style'
          placeholder='tap style' required/>
        <input 
          type='number'
          name='quantity'
          placeholder='tap quantity' required/>
        <button type='submit'>add tap</button>
      </form>
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;