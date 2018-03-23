const express = require('express');
const rest = require('./rest.js');
const app = express.Router();
module.exports = app;

app.use((req, res, next) => {
	console.log('ws call', req.url);
	next();
});



const resources = ['tickets', 'users'];

resources.forEach((resource) => {
	app.use(`/${resource}`, rest.resource(resource));
});

app.use('/not-well-working', (req, res, next) => {
	if (Math.random() < 0.5) {
		res.sendStatus(500);
		return;
	}
	res.json({
		content: 'ok'
	});
});

app.use('/needs-authorization-header', (req, res) => {
	if (!req.headers.authorization) {
		return res.status(403).json({
			error: 'No credentials sent!'
		});
	}
	res.json({
		content: 'needs-authorization-header ok'
	});
});