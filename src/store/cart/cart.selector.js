// 4th step: Selectors to be used on other components to access current states in Redux store.

import { createSelector } from 'reselect';


// 'car' is the name of cart reducer. This was set up in 'root-reducer.js'
const selectCartReducer = (state) => state.cart;



// Selector to select cart states based on different conditions

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);