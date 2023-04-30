const router = require('express').Router();
const { Pick } = require('../../models');

router.get('/', async(req,res) => {
  try{
    const allPicks = await Pick.findAll();
    res.status(200).json(allPicks);
  } catch(err) {
    res.status(500).json(err);
  }
})

module.exports = router;