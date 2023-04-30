const router = require('express').Router();
const { Owner } = require('../../models');

router.get('/', async(req,res) => {
  try {
    const allOwners = await Owner.findAll();
    res.status(200).json(allOwners)
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;