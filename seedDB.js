const { Owner, Player, Pick } = require('./models');
const sequelize = require('./config/connection');

const ownerSeed = [
  {
    name: 'King',
    team_name: 'Kings Team',
    draft_order: 1
  },
  {
    name: 'white',
    team_name: 'jimmy g spot',
    draft_order: 2
  }
]
const playerSeed = [
  {
    name: 'Joe Burrow',
    position: 'QB',
    team: 'CIN',
    rank_ovr: 1,
    rank_pos: 1,
    owner_id: null,
    bye_week: 8
  },
  {
    name: 'Tom Brady',
    position: "QB",
    team: "TB",
    rank_ovr: 5,
    rank_pos:2,
    owner_id: null,
    bye_week: 11
  }
]
const pickSeed = [
  {
    id: 1,
    number: 1.01,
    owner_id: null,
    player_id: null
  },
  {
    id: 2,
    number: 1.02,
    owner_id: null,
    player_id: null
  },{
    id: 3,
    number: 1.03,
    owner_id: null,
    player_id: null
  }
]

const seedDB = async () => {
  await sequelize.sync({ force: true });

  await Owner.bulkCreate(ownerSeed);

  await Player.bulkCreate(playerSeed);

  await Pick.bulkCreate(pickSeed);

  process.exit(0);
}

seedDB();