export const cartReducer = (state, action) => {
  setCartState((current) => [...current, { ...product, qty: 1 }]);
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      setCartState((current) => current.filter((c) => c.id !== product.id));
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};
