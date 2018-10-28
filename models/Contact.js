const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	fname: {
		type: String,
		required: true
	},
	lname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	areaCode: {
		type: String,
		required: true
	},
	centralOfficeCode: {
		type: String,
		required: true
	},
	lineNumber: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = Contact = mongoose.model('contacts', ContactSchema);

