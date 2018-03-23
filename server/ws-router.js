const express = require('express');
const rest = require('./rest.js');
const app = express.Router();
module.exports = app;

app.use((req, res, next) => {
	console.log('ws call', req.url);
	next();
});

app.use((req, res, next) => {
	if (Math.random() < 0.0) {
		res.sendStatus(500);
		return;
	}
	next();
});

const resources = ['tickets', 'users'];

resources.forEach((resource) => {
	app.use(`/${resource}`, rest.resource(resource));
});
