import { createContext, useState, useEffect } from 'react';

// Import this to get list of categories from firebase utils
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// Create category context and set default value
export const CategoriesContext = createContext({
  categoriesMap: {},
});




export const CategoriesProvider = ({ children }) => {

  // category related context
  const [categoriesMap, setCategoriesMap] = useState({});

  // On mount, we want to get categories from Firestore and push it to categoriesMap state
  useEffect(() => {

    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);



  // Value to be passed to other components with context provider
  const value = { categoriesMap };


  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};