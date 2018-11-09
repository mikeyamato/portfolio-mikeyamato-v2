

import { createStore, applyMiddleware, compose } from 'redux'; // `compose` allows us to use the redux chrome extension. do this by putting `applyMiddleware(...middleware)` inside `compose()`. then add the redux dev tools
import thunk from 'redux-thunk';  // middleware 
import rootReducer from './reducers'; 

const initialState = {};
const middleware = [thunk];

// redux, use createStore method to create store. this helps with `store={store}`
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));  
// first parameter is for the reducer. bring in the root reducer.
// second parameter is for the initial state

export default store; 