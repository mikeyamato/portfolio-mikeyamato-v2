const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const passport = require('passport');
const path = require('path');  // part of node.js
const port = process.env.PORT || 5000; 
const db = require('./config/keys').mongoURI;

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const contact = require('./routes/api/contact');

app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

// passport config (strategy type)
require('./config/passport')(passport); 

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/contact', contact);

// server static assets if in production
if(process.env.NODE_ENV === 'production'){
	// set static folder
	app.use(express.static('client/build'));
	// for any route that gets hit here, load index.html
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}

http.createServer(app).listen(port, () => {
	console.log(`server listening to port ${port}`);
})

// this supposedly helps stop the `Error: listen EADDRINUSE :::5000` notificiations in terminal..it doesn't
process.on('SIGINT', () => { console.log("Bye Mike!"); process.exit(); });