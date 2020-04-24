import React from 'react';
import { v4 } from 'uuid';

function NewTapForm(){

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.style.value);
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <h3>New Tap Form</h3>
        <input 
          type='text'
          name='name'
          placeholder='tap name' />
        <input 
          type='text'
          name='brand'
          placeholder='tap brand' />
        <input 
          type='number'
          name='price'
          placeholder='tap price' />
        <input 
          type='text'
          name='style'
          placeholder='tap style' />
        <input 
          type='number'
          name='quantity'
          placeholder='tap quantity' />
        <button type='submit'>add tap</button>
      </form>
    </React.Fragment>
  );
}

export default NewTapForm;