// Import just the router express
const routes = require('express').Router();

// Import the index.js from 'api' folder
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const medicationRoutes = require('./medication-routes');
// const addMedication = require('./addMedication-routes');

// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
routes.use('/api', apiRoutes);
routes.use('/', homeRoutes);
routes.use('/medication', medicationRoutes);
// routes.use('/', addMedication);

module.exports = routes;
