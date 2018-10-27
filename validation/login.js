// copy of `signup.js` with some changes

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
	let errors = {};

	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	// check if password format is valid
	if(!Validator.isEmail(data.email)){
		errors.email = 'Email is invalid';
	}

	// for email
	if(Validator.isEmpty(data.email)){
		errors.email = 'Email field is required';
	}

	// for password
	if(Validator.isEmpty(data.password)){
		errors.password = 'Password field is required';
	}

	return {
		errors: errors,  // also can be written as just `errors`
		isValid: isEmpty(errors)
	}
}