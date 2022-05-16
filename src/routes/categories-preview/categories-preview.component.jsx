import { Fragment } from 'react';
import { useSelector } from 'react-redux';

// Selectors to access categories states
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

// This component will contain multiple category preview
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {

  // Selector to access categories map states
  const categoriesMap = useSelector(selectCategoriesMap);

  // Selector to access loading states
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;