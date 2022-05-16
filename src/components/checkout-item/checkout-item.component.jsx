// 'useSelector' hook is to access Redux store's states
// 'useDispatch' is to send actions to reducers
import { useSelector, useDispatch } from 'react-redux';

// This selector will only select cart item states
import { selectCartItems } from '../../store/cart/cart.selector';

// Actions to update cart items
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';

// Styled-components
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';


// Our check-out item component
const CheckoutItem = ({ cartItem }) => {
  // This 'cartItem' prop is passed by checkout component

  const { name, imageUrl, price, quantity } = cartItem;        // Destructure the prop to get the item's data

  // Get cartItem states from Redux Store
  const cartItems = useSelector(selectCartItems);

  // Function to dispatch action to reducers to clear/add/remove items from cart.
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;