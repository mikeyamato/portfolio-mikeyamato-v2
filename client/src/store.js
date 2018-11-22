import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// NOTE: the following only works if Redux DevTools is installed on my browser
// const store = createStore(
// 	rootReducer, 
// 	initialState, 
// 	compose(
// 		applyMiddleware(
// 			...middleware
// 		),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)
// );

// NOTE: the following works on all browsers
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);

export default store;