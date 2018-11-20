import axios from 'axios';
import { GET_ERRORS } from './types';
// thunk is used here because we're fetching from the backend and waiting for the response then dispatch

// Register user
export const signupUser = userData => dispatch => {  // `dispatch` is part of thunk
	
}


// Contact

export const newContact = (contactData, history) => dispatch => { 
	// // dispatch to the reducer (must have a type)
	axios
		.post('/api/contact/request', contactData)
		// .then(res => history.push('/')) 
		.then(res => console.log('*** success', res.data))  
		
		// TODO: https://appdividend.com/2018/06/15/react-redux-axios-tutorial-example/

		// .then(res => console.log('*** axios res.data' res.data))

		// .catch(err => console.log('*** bad 1', err))  // just spits out a generic error message
		// .catch(err => console.log('*** bad 2', err.response.data))  // just spits out a generic error message
		// .catch(err => console.log('*** bad 3', err.response.data.email))  // spits out the reason
		.catch(err => 
			dispatch({
				type: GET_ERRORS,   // this is what's listed on `types.js`
				payload: err.response.data
			})
		)  
}



// when looking at the Redux dev tool, if GET_ERRORS is getting called, you will see this action type being called in the top half part. 