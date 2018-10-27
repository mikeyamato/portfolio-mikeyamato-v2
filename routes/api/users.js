const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');

// load input validation
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

// load User model
const User = require('../../models/User');

// @route GET api/users/test
// @desc tests users route
// @access public
router.get('/test', (req ,res) => res.json({msg: "users works"}));

// @route POST api/users/signup
// @desc signup users
// @access public
router.post('/signup', (req ,res) => {
	// for any route that takes in data, run the following
	// pull out 'errors' and 'isValid' from `signup.js` validator via destructuring
	const { errors, isValid } = validateSignupInput(req.body);
	// check validation
	if(!isValid){ 
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email })
	.then(user => {
		if(user){
			errors.email = 'Email already exists'
			return res.status(400).json(errors);
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});
			// to hash password with 10 random characters
			bcrypt.genSalt(10, (err,salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.log(err))
				})
			})
		}
	})
});

// @route POST api/users/login
// @desc login users & returning token
// @access public
router.post('/login', (req,res)=>{
	const { errors, isValid } = validateLoginInput(req.body);
	if(!isValid){ 
		return res.status(400).json(errors);
	}
	
	const email = req.body.email;
	const password = req.body.password;

	// find user by email
	User.findOne({email:email})  // can also be written as `User.findOne({email})`
		.then(user => {
			if(!user){
				errors.email = 'User not found'
				return res.status(404).json(errors);
			}

			// check password
			// we can do this here since we are getting `user` data back when finding an email
			bcrypt.compare(password, user.password)
				.then(isMatch => {  // `isMatch` is an arbitrarily named t/f value
					if(isMatch){
						// user matched
						// create jwt payload
						const payload = {
							id: user.id,
							name: user.name
						}
						// sign token
						jwt.sign(payload, keys.secretORKey, { expiresIn: '1hr' }, (err, token)=>{
							res.json({
								success: true,
								token: 'Bearer ' + token
							});
						});
					} else {
						errors.password = 'Password incorrect'
						return res.status(400).json(errors); 
					}
				})  
		})
})

// @route GET api/users/current
// @desc return current user
// @access private
router.get('/current', passport.authenticate('jwt', { session: false }), (req,res)=>{  // 'jwt' is the strategy we're using
	// res.json({ msg: 'success' })
	res.json({
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	})

})


module.exports = router;