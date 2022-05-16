// Styled-components
import { CartItemContainer, ItemDetails } from './cart-item.styles';

// Our cart item component. Will show on drop-down cart or checkout cart.
const CartItem = ({ cartItem }) => {

  // 'cartItem' is the props passed from other components such as: drop-down cart, checkout cart
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;