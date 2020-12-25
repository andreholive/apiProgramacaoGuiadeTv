const { Router } = require('express');
const express = require('express');
const programsController = require('./controllers/programsController')

const routes = express.Router();

routes.get('/programacao', programsController.getData);

module.exports = routes;