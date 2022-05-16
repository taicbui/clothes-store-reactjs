// 3rd step: cart reducer to be included in the root reducer on 'root-reducer.js'
// cart reducer will update cart states based on the actions dispatched from UI

import { CART_ACTION_TYPES } from './cart.types';


// Cart states to be updated and this cart reducer
export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  // For each action's type dispatched to this reducer, update cart states according to its payload
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};