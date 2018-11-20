const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateContactInput(data){
	let errors = {};

	data.fname = !isEmpty(data.fname) ? data.fname : '';  // since Validator needs data to be a string, it will run this first
	data.lname = !isEmpty(data.lname) ? data.lname : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.areaCode = !isEmpty(data.areaCode) ? data.areaCode : '';
	data.centralOfficeCode = !isEmpty(data.centralOfficeCode) ? data.centralOfficeCode : '';
	data.lineNumber = !isEmpty(data.lineNumber) ? data.lineNumber : '';
	data.message = !isEmpty(data.message) ? data.message : '';

	if(!Validator.isLength(data.fname, { min: 2, max: 30 })){
		errors.fname = 'First name must be between 2 and 30 characters';
	}

	if(!Validator.isLength(data.lname, { min: 2, max: 30 })){
		errors.lname = 'Last name must be between 2 and 30 characters';
	}

	// for name
	if(Validator.isEmpty(data.fname)){
		errors.fname = 'First name field is required';
	}

	if(Validator.isEmpty(data.lname)){
		errors.lname = 'Last name field is required';
	}

	// for email
	if(Validator.isEmpty(data.email)){
		errors.email = 'Email field is required';
	}

	// check if email format is valid
	if(!Validator.isEmail(data.email)){
		errors.email = 'Email is invalid';
	}

	// for area code
	if(Validator.isEmpty(data.areaCode)){
		errors.areaCode = 'Phone area code field is required (i.e. 555)';
	}

	if(!Validator.isInt(data.areaCode, { min: 200, max: 999 })){
		errors.areaCode = 'Phone area code must be a number (i.e. 555)';
	}

	// for central office code
	if(Validator.isEmpty(data.centralOfficeCode)){
		errors.centralOfficeCode = 'Phone prefix field is required (i.e. 555)';
	}

	if(!Validator.isInt(data.centralOfficeCode, { min: 200, max: 999 })){
		errors.centralOfficeCode = 'Phone prefix must be a number (i.e. 555)';
	}

	// for line number
	if(Validator.isEmpty(data.lineNumber)){
		errors.lineNumber = 'Phone suffix field is required (i.e. 5555)';
	}

	if(!Validator.isInt(data.lineNumber, { min: 0000, max: 9999 })){
		errors.lineNumber = 'Phone suffix must be a number (i.e. 5555)';
	}

	if(!Validator.isLength(data.lineNumber, { min: 4, max: 4 })){
		errors.lineNumber = 'Phone suffix must be a number (i.e. 5555)';
	}

	// for message
	if(Validator.isEmpty(data.message)){
		errors.message = 'Message field is required';
	}

	// check password min/max length
	if(!Validator.isLength(data.message, { min: 1, max: 150 })){
		errors.message = 'Message must not exceed 150 characters';
	}

	return {
		errors: errors,  // also can be written as just `errors`
		isValid: isEmpty(errors)
	}
}