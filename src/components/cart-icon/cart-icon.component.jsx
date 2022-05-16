// Import svg picture as React component to use it.
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// 'useSelector' hook is to access the Redux store's states
// 'useDispatch' hook is to dispatch action to the reducers
import { useDispatch, useSelector } from 'react-redux';

// We will need 2 selector: selectCartCount and selectIsCartOpen
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';


// Action to open and close drop-down cart
import { setIsCartOpen } from '../../store/cart/cart.action.js';

// Styled-components
import { CartIconContainer, ItemCount } from './cart-icon.styles';



// Our Cart Icon component
const CartIcon = () => {
  const dispatch = useDispatch();

  // Get cart count states
  const cartCount = useSelector(selectCartCount);

  // Get cart open/close states
  const isCartOpen = useSelector(selectIsCartOpen);

  // Function to open/close drop-down cart
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;