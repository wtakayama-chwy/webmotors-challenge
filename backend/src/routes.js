const express = require('express');

const CarsController = require('./controllers/CarsController');

const routes = express.Router();

routes.get('/Make', CarsController.listBrands);
routes.get('/Model', CarsController.listModels);
routes.get('/Version', CarsController.listVersions);
routes.get('/Vehicles', CarsController.listVehicles);

module.exports = routes;