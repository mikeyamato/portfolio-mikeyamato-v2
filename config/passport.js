const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');  // search for the user that comes w/ the payload
const User = mongoose.model('users');  // 'users' name comes from models>User.js
const keys = require('./keys');

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretORKey;

module.exports = passport => {  // 'passport' is just a parameter. this is sent to server.js.
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {  // payload here is the bcrypt payload
			// console.log('====================================');
			// console.log(jwt_payload);
			// console.log('====================================');
			User.findById(jwt_payload.id)  // 'findById' is a mongoose method
				.then(user => {
					if (user) {
						return done(null, user);
					} else {
						return done(err, false);
					}
				})
				.catch(err => console.log(err))
	}));
}
