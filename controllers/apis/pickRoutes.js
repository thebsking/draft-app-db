const router = require('express').Router();
const { Pick } = require('../../models');
const { update } = require('../../models/owner');

router.get('/', async (req, res) => {
  try {
    const allPicks = await Pick.findAll();
    res.status(200).json(allPicks);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const onePick = await Pick.findOne({where:{id: req.params.id}})
    res.status(200).json(onePick);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatePick = await Pick.update(
      {
        owner_id: req.body.owner_id,
        player_id: req.body.player_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(updatePick);
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;