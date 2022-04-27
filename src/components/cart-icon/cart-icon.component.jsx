import { useContext, useEffect, useRef } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const cartIconRef = useRef()

  const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(true)
  };



  return (
    <CartIconContainer onClick={toggleIsCartOpen} ref={cartIconRef} >
      <ShoppingIcon className='shopping-icon' />
      {
        (cartCount > 0) ? (<ItemCount>{cartCount}</ItemCount>) : null
      }
    </CartIconContainer>
  );
};

export default CartIcon;