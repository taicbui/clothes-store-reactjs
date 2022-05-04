// Import product card, which will show product preview
import ProductCard from '../product-card/product-card.component';

// Import styled-component 
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';


// This component will show single category preview
// This will receive props (title and products) and work with them
const CategoryPreview = ({ title, products }) => {
  console.log(products)
  return (
    <CategoryPreviewContainer>
      <h2>
        {/* Title of the category. Redirect to /title when clicked*/}
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)                           // This filter is to limit the number of items shown to 4. '_' means I don't want to use the first param which is to get the product. 'idx' is the index of the array. idx < 4 means we will only get item with index from 0-3
          .map((product) => (
            <ProductCard key={product.id} product={product} />   // 'key' prop helps Reactjs re-renders only ProductCard related to changes in the state, instead of re-rendering the whole thing
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};


// This component will be imported by categories-preview component, which will iterate and show all the category previews
export default CategoryPreview;