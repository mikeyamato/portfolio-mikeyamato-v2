import { GET_ERRORS } from '../actions/types';


const initialState = {
	isAuthenticated: false, 
	user: {}  // this user object will be used below
}

// every reducer exports a function
export default function(state = initialState, action){
	// test with a switch statement
	switch(action.type){  // actions need to include a type to test against

		
		// case GET_ERRORS:
		// 	return {
		// 		...state,
		// 		user: action.payload
		// 	}
		default: 
			return state;  // return the state as-is
	}
}