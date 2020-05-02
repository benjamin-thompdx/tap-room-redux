import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADD_TAP:
      return Object.assign({}, state, {
        [action.id]: {
          name: action.name,
          brand: action.brand,
          price: action.price,
          style: action.style,
          quantity: action.quantity,
          id: action.id
        }
      });
    case c.SELL_PINT:
      return Object.assign({}, state, {
        [action.id]: {
          name: action.name,
          brand: action.brand,
          price: action.price,
          style: action.style,
          quantity: action.quantity,
          id: action.id
        }
      });
    default:
      return state;
  }
};