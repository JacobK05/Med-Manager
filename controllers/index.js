// Import just the router express
const routes = require('express').Router();

// Import the index.js from 'api' folder
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
routes.use('/',homeRoutes);
routes.use('/api', apiRoutes);

module.exports = routes;
