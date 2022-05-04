import { useContext, Fragment } from 'react';

// Categories context contains list of categories fetched from Firestore
import { CategoriesContext } from '../../contexts/categories.context';

// A single category preview. We will display each category preview for each category
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;