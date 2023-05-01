const router = require('express').Router();
const { Player } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allPlayers = await Player.findAll({
      order: [['rank_ovr', 'ASC']]
    });
    res.status(200).json(allPlayers)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req,res) => {
  try {
    const getPlayer = await Player.findOne({
      where: {id: req.params.id}
    })
    res.status(200).json(getPlayer);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const playerUpdate = await Player.update(
      {
        owner_id: req.body.owner_id
      },{
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(playerUpdate);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/team/:team', async (req, res) => {
  try {
    const teamPlayers = await Player.findAll({
      where: {
        team: req.params.team
      },
      order: [['rank_ovr', 'ASC']]
    })
    res.status(200).json(teamPlayers);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/pos/:pos', async (req, res) => {
  try {
    const posPlayers = await Player.findAll({
      where: {
        position: req.params.pos
      },
      order: [['rank_pos', 'ASC']]
    })
    res.status(200).json(posPlayers)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;