const router = require('express').Router()
const locationRoutes = require('./LocationRoute')
const travellerRoutes = require('./TravellerRoute')
const tripsRoutes = require('./TripsRoute')

router.use('/travellers', travellerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;