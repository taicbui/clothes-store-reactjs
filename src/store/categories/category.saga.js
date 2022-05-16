// 5th step: After the action hits the reducer, it will go to saga middleware. This is different from other middleware. In other middleware, action will go through them before reaching the reducer
// Saga might fire another action and this action will go through saga again.



import { takeLatest, all, call, put } from 'redux-saga/effects';
/*
all: run everything inside and only complete when all of it is done
takeLatest: effect starts with 'take' is where we take actions. 'takeLatest' is to listen to the lastest action and cancel the previous ones.
call: anytime you have a function and you want to turn it into an effect, you use 'call'
*/


import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    // yield works like await but with effect, thus we use call effect. 
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');        // 'categories' is the parameters we pass to 'getCategoriesAndDocuments'

    yield put(fetchCategoriesSuccess(categoriesArray));                  // Dispatch 'fetchCategoriesSuccess'



  } catch (error) {
    yield put(fetchCategoriesFailed(error));                             // Dispatch 'fetchCategoriesFailed'
  } 
}


export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}


export function* categoriesSaga() {

  // Listen to 'onFetchCategories'
  yield all([call(onFetchCategories)]);
}