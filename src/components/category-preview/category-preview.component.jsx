// Our category-preview will contain multiple product cards
import ProductCard from '../product-card/product-card.component';


// Styled-components
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';


// Our preview component
const CategoryPreview = ({ title, products }) => {
  // 'title' and 'products' are passed by CategoriesPreview component.

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
        products
          .filter((_, idx) => idx < 4)                               // This filter is to limit the number of items shown to 4. '_' means I don't want to use the first param which is to get the product. 'idx' is the index of the array. idx < 4 means we will only get item with index from 0-3
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;