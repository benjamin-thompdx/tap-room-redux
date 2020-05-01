import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADD_TAP:
      const { name, brand, price, style, quantity, id } = action;
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          style: style,
          quantity: quantity,
          id: id
        }
      });
    default:
      return state;
  }
};