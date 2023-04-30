const Owner = require('./owner');
const Pick = require('./pick');
const Player = require('./player')

Player.belongsTo(Owner, {foreignKey: 'owner_id'});
Owner.hasMany(Player, {foreignKey: 'owner_id'});

Pick.belongsTo(Owner, {foreignKey: 'owner_id'});
Owner.hasMany(Pick, {foreignKey: 'owner_id'});

Pick.belongsTo(Player, {foreignKey: 'player_id'});
Player.hasOne(Pick, {foreignKey: 'player_id'});

module.exports = {
  Owner,
  Pick,
  Player
}