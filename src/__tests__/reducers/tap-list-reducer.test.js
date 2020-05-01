import tapListReducer from '../../reducers/tap-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('tapListReducer', () => {

  let action;
  const tapData = {
    name: 'Mountain Water',
    brand: 'Butte Brewery',
    price: 8,
    style: 'Blonde Ale',
    quantity: 124,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new tap data to masterTapList', () => {
    const { name, brand, price, style, quantity, id } = tapData;
    action = {
      type: c.ADD_TAP,
      name: name,
      brand: brand,
      price: price,
      style: style,
      quantity: quantity,
      id: id
    };

    expect(tapListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        style: style,
        quantity: quantity,
        id: id
      }
    });
  });

});