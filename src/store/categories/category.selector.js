// 4th step: Selectors to be used on other components to access current states in Redux store.

import { createSelector } from 'reselect';

// Get category reducer. 'categories' is the name of the reducer, set up in root-reducer.js
const selectCategoryReducer = (state) => state.categories;

// Each selector will return a list of current states depending on the condition
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);