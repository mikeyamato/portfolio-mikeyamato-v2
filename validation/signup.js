const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSignupInput(data){
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';  // since Validator needs data to be a string, it will run this first
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : '';

	if(!Validator.isLength(data.name, { min: 2, max: 30 })){
		errors.name = 'name must be between 2 and 30 characters';
	}

	// for name
	if(Validator.isEmpty(data.name)){
		errors.name = 'Name field is required';
	}

	// for email
	if(Validator.isEmpty(data.email)){
		errors.email = 'Email field is required';
	}

	// check if password format is valid
	if(!Validator.isEmail(data.email)){
		errors.email = 'Email is invalid';
	}

	// for password
	if(Validator.isEmpty(data.password)){
		errors.password = 'Password field is required';
	}

	// check password min/max length
	if(!Validator.isLength(data.password, { min: 6, max: 30 })){
		errors.password = 'Password must be at least 6 characters';
	}

	// for password confirm
	if(Validator.isEmpty(data.passwordConfirm)){
		errors.passwordConfirm = 'Confirm password field is required';
	}

	// check if password & passwordConfirm are the same
	if(!Validator.equals(data.password, data.passwordConfirm)){
		errors.passwordConfirm = 'Passwords must match';
	}

	return {
		errors: errors,  // also can be written as just `errors`
		isValid: isEmpty(errors)
	}
}