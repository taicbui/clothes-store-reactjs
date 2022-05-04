import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {

  // useParams() is to get URL param
  const { category } = useParams();

  // get list of categories from Categories context
  const { categoriesMap } = useContext(CategoriesContext);

  // default value of the product would be the category with the title matching with the current URL param
  const [products, setProducts] = useState(categoriesMap[category]);

  // on mount, we set the product state as category that matches with our current URL param
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;