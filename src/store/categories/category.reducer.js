// 3rd step: category reducer to be included in the root reducer on 'root-reducer.js'
// category reducer will update cart states based on the actions dispatched from UI

import { CATEGORIES_ACTION_TYPES } from './category.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};


// Update current states with new payload
export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};