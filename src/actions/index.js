export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTap = (tap) => {
  const { name, brand, price, style, quantity, id } = tap;
  return {
    type: 'ADD_TAP',
    name: name,
    brand: brand,
    price: price,
    style: style,
    quantity: quantity,
    id: id
  }
}