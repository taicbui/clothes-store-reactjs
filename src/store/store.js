import { compose, createStore, applyMiddleware } from 'redux';

//Methods to set up redux persist
import { persistStore, persistReducer } from 'redux-persist';


import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

// config redux persist
const persistConfig = {
  key: 'root',            // to start from the root level (persist the whole thing) 
  storage,                // to store in local storage
  whitelist: ['cart'],    // 2 options: blacklist or whitelist. whitelist picks the reducer that we want to persist only.
};

const sagaMiddleware = createSagaMiddleware();

// intantiate our persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,   // render logger when our env is in development
  sagaMiddleware,                                    // render saga regardless of the env
].filter(Boolean);          // filter out anything which is false, thus our middleware only apply when we're in development


// I have this compose method I want to use
// a compose method is a method that calls another method
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&          // only if we're in development
    window &&                                        // and if we have window object because in build process, there is no window object
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||  // and if this redux devtool exists then use this compose
  compose;          // otherwise, just use the compose from redux. Compose is used when you want to pass multiple store enhancers to the store


const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));


/**
 * creatStore() in Redux takes 3 arguments:
 * 1. reducer
 * 2. preloadedState
 * 3. enhancer
 */


export const store = createStore(
  persistedReducer,   
  undefined,
  composedEnhancers
);


// run saga
sagaMiddleware.run(rootSaga);


// create persist store
export const persistor = persistStore(store);