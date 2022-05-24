//IMPORT MIDDLEWARE EXPRESS
const express = require('express');
const middleware = express();
const errorController = require('../controllers/404');

//HANDLING UNKNOWN ENDPOINTS
middleware.get('*', errorController.index);

//EXPORT MODULE MIDDLEWAREx
module.exports = middleware;