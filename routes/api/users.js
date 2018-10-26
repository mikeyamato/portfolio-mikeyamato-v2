const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// @route GET api/users/test
// @desc tests users route
// @access public
router.get('/test', (req ,res) => res.json({msg: "users works"}));

// @route GET api/users/signup
// @desc signup users
// @access public
router.post('/signup', (req ,res) => {
	User.findOne({ email: req.body.email })
	.then(user => {
		if(user){
			return res.status(400).json({ email: 'Email already exists' });
		} else {
			const newUser = new User({
				nickname: req.body.nickname,
				email: req.body.email,
				password: req.body.password
			});
			// to hash password with 10 random characters
			bcrypt.getSalt(10, (err,salt) => {
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




module.exports = router;