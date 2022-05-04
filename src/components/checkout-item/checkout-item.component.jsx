import { useContext } from 'react';


// Import CartContext, which contains cart related states: name, imageUrl, price and quantity
import { CartContext } from '../../contexts/cart.context';

// Import styled-component
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';


// This component will be included in checkout component, which is checkout page
const CheckoutItem = ({ cartItem }) => {

  // Destructure the props to get all item's attributes
  const { name, imageUrl, price, quantity } = cartItem;

  // Get cart related states
  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  // Function to clear item from cart
  const clearItemHandler = () => clearItemFromCart(cartItem);

  // Function to add item to cart
  const addItemHandler = () => addItemToCart(cartItem);

  // Function to remove item from cart
  const removeItemHandler = () => removeItemToCart(cartItem);

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


// Will be imported by Checkout component
export default CheckoutItem;