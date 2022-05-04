import { useContext} from 'react';

// Import cart icon to use it as a component. This is how we normally use svg
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


// CartContext contains cartCount state (counts the number of items in cart) 
import { CartContext } from '../../contexts/cart.context';

// Import styled-component
import { CartIconContainer, ItemCount } from './cart-icon.styles';



// Cart Icon component
const CartIcon = () => {

  // Import cartCount state
  const {cartCount} = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIcon className='shopping-icon' />
      {  
        // If there is no item in cart, show nothing but the cart icon. If there is one or more items in cart, show <ItemCount>
        (cartCount > 0) ? (<ItemCount>{cartCount}</ItemCount>) : null
      }
    </CartIconContainer>
  );
};


// Navigation will import this CartIcon component. CartIcon is located in Navigation bar
export default CartIcon;