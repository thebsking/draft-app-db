const router = require('express').Router();
const { Player } = require('../../models');

router.get('/', async(req,res) => {
  try {
    const allPlayers = await Player.findAll();
    res.status(200).json(allPlayers)
  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router;