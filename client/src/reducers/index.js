// this is the root reducer file where we bring in all other reducers

import { combineReducers } from 'redux';
import authReducer from './authReducer'; // this is for authentication
import contactReducer from './contactReducer'; // this is for authentication
import errorReducer from './errorReducer'; // this is for authentication


// import errorReducer from './errorReducer';

export default combineReducers({
	auth: authReducer,  // anytime we want to use this the correct syntax is `this.props.auth`. auth is the key. 
	contact: contactReducer,
	errors: errorReducer
});