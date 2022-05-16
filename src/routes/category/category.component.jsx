import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Product category will contain multiple product cards under the same category
import ProductCard from '../../components/product-card/product-card.component';

// Spinners works when the page is loading
import Spinner from '../../components/spinner/spinner.component';

// Selectors to access category states
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

// Styled-components
import { CategoryContainer, Title } from './category.styles';


// Our category component
const Category = () => {
  // To get params passed by the URL
  const { category } = useParams();

  // Access the categories map and categories loading states in Redux's store
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  // products states to be passed a props to product card component
  const [products, setProducts] = useState(categoriesMap[category]);

  // Whenever 'category' or 'categoriesMap' updates, update the products states thus update the product card on the page.
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;