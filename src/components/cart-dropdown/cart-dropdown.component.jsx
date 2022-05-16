// 'useSelector' will be used to access states in Redux store
import { useSelector } from 'react-redux';

// 'useNavigate' will be used to redirect the website with event listenser
import { useNavigate } from 'react-router-dom';

// Button component
import Button from '../button/button.component';

// Our cart dropdown will contain multiple cart items
import CartItem from '../cart-item/cart-item.component';

// This is a 'createSelector'. We will use it to access to the Redux store's states
import { selectCartItems } from '../../store/cart/cart.selector';


// Styled components
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';


// Our cart-dropdown component
const CartDropdown = () => {

  // Get cart item states from Redux store, and pass them as props to 'CartItem'  
  const cartItems = useSelector(selectCartItems);

  // Go the check-out page when click on the 'go to checkout' button
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems> 
        {/* If there cart is not empty, show cart items. If the cart is empty, show message 'Your cart is empty' */}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};


// Export our cart-dropdown component
export default CartDropdown;