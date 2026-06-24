const express = require('express');
const router = express.Router();

const userRoutes = require('./users');
const workoutRoutes = require('./workouts');
const goalRoutes = require('./goals');
const exerciseRecommendationRoutes = require('./exerciseRecommendation');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/goals', goalRoutes);
router.use('/exerciseRecommendations', exerciseRecommendationRoutes);

module.exports = router;