import { GET_ERRORS } from '../actions/types';


const initialState = {
	isAuthenticated: false, 
	user: {}
}

// every reducer exports a function
export default function(state = initialState, action){
	// test with a switch statement
	switch(action.type){  // actions need to include a type to test against
		// case TEST_DISPATCH:
		// 	return {  // we don't mutate initial state. we make a copy and change that
		// 		...state,
		// 		user: action.payload  // fill in the `user` with the payload...which is userData
		// 	}
		default: 
			return state;  // return the state as-is
	}
}