const express = require('express');
const router = express.Router();
const plivo = require('plivo');
const keys = require('../../config/keys');
const plivoClient = new plivo.Client(keys.plivoAuthId,keys.plivoAuthToken);

// load input validation
const validateContactInput = require('../../validation/contact');

// load User model
const Contact = require('../../models/Contact');

// @route GET api/users/test
// @desc tests users route
// @access public
router.get('/test', (req ,res) => res.json({msg: "users works"}));

// @route POST api/users/signup
// @desc signup users
// @access public
router.post('/request', (req ,res) => {

	// for any route that takes in data, run the following
	// pull out 'errors' and 'isValid' from `signup.js` validator via destructuring
	const { errors, isValid } = validateContactInput(req.body);
	// check validation
	if(!isValid){ 
		return res.status(400).json(errors);
	}

	Contact.findOne({ email: req.body.email })
	.then(user => {
		if(user){
			errors.email = 'Looks like you have previously submitted a request. I will be in contact with you soon. Thank you. '
			return res.status(400).json(errors);
		} else {
			const newContact = new Contact({
				fname: req.body.fname,
				lname: req.body.lname,
				email: req.body.email,
				// phone: '('+req.body.areaCode+') '+req.body.centralOfficeCode+'-'+req.body.lineNumber,
				areaCode: req.body.areaCode,
				centralOfficeCode: req.body.centralOfficeCode,
				lineNumber: req.body.lineNumber,
				message: req.body.message
			});
			newContact
				.save()
				// .then(user => res.json(user))
				.then((user) => 
					res.json(user))
					plivoClient.messages.create(
						keys.plivoFromNumber,
						keys.plivoToNumber,
						'New contact request from '+ req.body.fname + ' ' + req.body.lname + '. (' + req.body.areaCode + ') ' + req.body.centralOfficeCode + '-' + req.body.lineNumber
						// req.body.message
					).then((message_created) => {
						console.log(message_created)
					})
				
				.catch(err => console.log(err));
		
		}
	})
});


module.exports = router;