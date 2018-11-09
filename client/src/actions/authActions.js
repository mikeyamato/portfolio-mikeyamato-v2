// call the request then redirect the application to the login page on success

import axios from 'axios';
import { GET_ERRORS } from './types';
// thunk is used here because we're fetching from the backend and waiting for the response then dispatch

// Register user
export const signupUser = userData => dispatch => {  // `dispatch` is part of thunk
	// // dispatch to the reducer (must have a type)
	// return {
	// 	type: TEST_DISPATCH,
	// 	payload: userData  // okay to just return `type`. but most times we'll return data as well.
	// }

	axios
		.post('/api/users/signup', userData)  // `userData` as passed in from above. we'll hit this api
		.then(res => console.log(res.data))  // success = redirect to a different page
		.catch(err => 
			dispatch({  // call `dispatch` from above since this is an async call thank to thunk
				type: GET_ERRORS,
				payload: err.response.data  // error respone
			}) 
		)
}

// when looking at the Redux dev tool, if GET_ERRORS is getting called, you will see this action type being called in the top half part. 