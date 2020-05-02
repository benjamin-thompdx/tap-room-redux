import * as c from './../actions/ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTap = (tap) => {
  const { name, brand, price, style, quantity, id } = tap;
  return {
    type: c.ADD_TAP,
    name: name,
    brand: brand,
    price: price,
    style: style,
    quantity: quantity,
    id: id
  }
}

export const sellPint = (tap) => {
  const { name, brand, price, style, quantity, id } = tap;
  return {
    type: c.SELL_PINT,
    name: name,
    brand: brand,
    price: price,
    style: style,
    quantity: quantity-1,
    id: id
  }
}