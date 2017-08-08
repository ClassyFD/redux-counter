import {createStore} from 'redux';
import reducer from './ducks/counter'
// import promiseMiddleware from 'redux-promise-middleware'
let store = createStore(reducer)

// let createStoreWithMiddleware = applyMiddleware(
//     promiseMiddleware()
// )(createStore);
// let store = createStoreWithMiddleware
//STORE WITH MIDDLEWARE
// import { createStore } from 'redux'; //Notice redux, not react-redux
// import reducer from './reducer';
// import promiseMiddleware from 'redux-promise-middleware';

// let createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware()
// )(createStore);

// let store = createStoreWithMiddleware(reducer);

// export default store; //The store is used in index.js by the react-redux top level provider

export default store
