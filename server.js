const http = require('http');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000; 
http.createServer(app).listen(port, () => {
	console.log(`server listening to port ${port}`);
})