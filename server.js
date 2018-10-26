const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000; 
const db = require('./config/keys').mongoURI;

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

app.get('/', (req, res) => {
	res.send('hi');
})

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

http.createServer(app).listen(port, () => {
	console.log(`server listening to port ${port}`);
})