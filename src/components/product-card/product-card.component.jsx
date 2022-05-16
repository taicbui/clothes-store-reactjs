import { useDispatch, useSelector } from 'react-redux';

// Selector to access items in cart
import { selectCartItems } from '../../store/cart/cart.selector';

// Action to be dispatched to add items to cart
import { addItemToCart } from '../../store/cart/cart.action';

// Button
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// Styled-components
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';


// Our product card component
const ProductCard = ({ product }) => {
  
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;