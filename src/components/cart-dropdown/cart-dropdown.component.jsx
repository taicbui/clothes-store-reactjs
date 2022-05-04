import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';

// CartContext contains cart related states
import { CartContext } from '../../contexts/cart.context';


// Import button for button 'go the checkout'
import Button from '../button/button.component';

// Import cart item component, which shows details of the item such as: description, quantity, price and picture
import CartItem from '../cart-item/cart-item.component';

// Import styled-component for cart dropdown
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';





// Cart Drop Down Component
const CartDropdown = () => {
  
  // destructure CartContext to get cart related states
  const { cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);

  // call useNavigate() to create navigation for button
  const navigate = useNavigate();

  // When we click on 'go to checkout' button, we will get redirected to checkout page and the cart dropdown will be closed
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen)
  };


  return (
    <CartDropdownContainer>
      <CartItems>
        {/* If cartItems state is not empty, we iterate it and we will pass each item to CartItem component as props. CartItem component will make the items show on cart dropdown. But if the cart is empty, show the empty message */}
        {cartItems.length ? (
          // the 'key' prop helps Reactjs to determine what cart item to re-renders whenever the state CartItems has a change. Instead of re-rendering the whole thing.
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      {/* If user clicks on this button, it will call 'goToCheckoutHandler' function above */}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};


// export CartDropdown. Navigation will import this. Because CartDropdown is located on Navigation part of the web page.
export default CartDropdown;