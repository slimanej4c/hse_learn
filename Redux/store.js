"use client";
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

import { persistReducer, persistStore } from 'redux-persist';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from './rootReducer';


import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =typeof window === "undefined" ? createNoopStorage() : createWebStorage();





const persistConfig = {
  key: 'root',
  storage,
  
  blacklist: ['error_login'], // navigation will not be persisted

}
const PersistedReducer = persistReducer(persistConfig, rootReducer)




const store = createStore(
  PersistedReducer,

  applyMiddleware( ReduxThunk)
);
//const persistor = persistStore(store)


//const persistor=null
export { store  };
