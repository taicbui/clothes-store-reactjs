import { useContext } from 'react';

// CartContext contains states related to cart. 
import { CartContext } from '../../contexts/cart.context';

// Button component
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// Import styled-class
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';


// ProductCard will be imported by and recieve prps from category-preview and category component
const ProductCard = ({ product }) => {

  // 3 types of information about the product we need: name, price and image
  const { name, price, imageUrl } = product;

  // State to add item to card
  const { addItemToCart } = useContext(CartContext);

  // Function to add item to card
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
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
    </ProductCardContainer>
  );
};

export default ProductCard;