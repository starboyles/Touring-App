const express = require('express');
const filePath = "/Users/mac/Desktop/BE/Touring App/assets/data/tours-simple.json";

const tourController = require('./../controllers/tourController');
const tourRouter = express.Router();

tourRouter
.route('/')
.get(tourController.getAllTours)
.post(tourController.createTours);

tourRouter
.route('/:id')
.get(tourController.getTours)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = tourRouter;