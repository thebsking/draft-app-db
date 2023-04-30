const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const pickRoutes = require('./pickRoutes');
const playerRoutes = require('./playerRoutes');

router.use('/owners', ownerRoutes);
router.use('/picks', pickRoutes);
router.use('/players', playerRoutes);

module.exports = router;