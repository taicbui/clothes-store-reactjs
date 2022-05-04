import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';


// This shop component is for shop page. 
// In this component, we create 2 routes to: CategoriesPreview and Category
const Shop = () => {
  return (
    <Routes>
      {/* index route is the default route when we're at parent route */}
      <Route index element={<CategoriesPreview />} />

      {/* whatever path it is, it will be labeled as 'category'. And when it goes to Category component, it will be catched by useParams() */}
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;