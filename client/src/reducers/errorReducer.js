import { GET_ERRORS } from '../actions/types';

const initialState = {} // since this is for errors, we'll start off with no errors

// every reducer exports a function
export default function(state = initialState, action){
	switch(action.type){  // actions need to include a type to test against
		case GET_ERRORS:
			return action.payload;
		default: 
			return state;  // return the state as-is
	}
}