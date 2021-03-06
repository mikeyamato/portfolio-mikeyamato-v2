import axios from 'axios';
import { GET_ERRORS, CONFIRM_CONTACT } from './types';
// thunk is used here because we're fetching from the backend and waiting for the response then dispatch

// Register user
export const signupUser = userData => dispatch => {  // `dispatch` is part of thunk
	
}


// Contact
export const newContact = (contactData, history) => dispatch => { 
	// // dispatch to the reducer (must have a type)
	axios
		.post('/api/contact/request', contactData)
		// .then(res => history.push('/'))  // to redirect (works)
		// .then(res => console.log('*** success', res.data))  // to return log (works)
		.then(res => {dispatch(contactPostSuccess(res.data))
		})

		/*
		areaCode: "747"
		centralOfficeCode: "555"
		date: "2018-11-22T01:15:56.238Z"
		email: "mikey@gmail.com"
		fname: "Shinsuke"
		lineNumber: "5555"
		lname: "Yamato"
		message: "hi"
		__v: 0
		_id: "5bf6034ce6b5e21465ae5d94"
		*/
		

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

export const contactPostSuccess = data => {
	return {
		type: CONFIRM_CONTACT,
		payload: {
			_id: data._id
		}
	}
}



// when looking at the Redux dev tool, if GET_ERRORS is getting called, you will see this action type being called in the top half part. 