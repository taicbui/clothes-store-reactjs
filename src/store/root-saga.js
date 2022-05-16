// Import some side effects
import { all, call } from 'redux-saga/effects';

// 2 sagas that we want to include in our root saga
import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}